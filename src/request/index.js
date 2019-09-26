/* @flow */

import {apiHost, apiHostNative, httpHeaders} from '../configure/reqConfigs';
import {addParams, toQueryString} from './useMeth';
import {setCache, getCache} from './cache';
// if (typeof global.self === 'undefined') {
//   global.self = global;
// }

function getHashCode(str, caseSensitive = false) {
  if (!caseSensitive) {
    str = str.toLowerCase();
  }
  // 1315423911=b'1001110011001111100011010100111'
  let hash = 1315423911;
  let i;
  let ch;
  for (i = str.length - 1; i >= 0; i--) {
    ch = str.charCodeAt(i);
    hash ^= (hash << 5) + ch + (hash >> 2);
  }

  return hash & 0x7fffffff;
}

export const schemeType = {
  http: 'http',
  https: 'https',
};

export const methodType = {
  get: 'GET',
  post: 'POST',
  head: 'HEAD',
  put: 'PUT',
  delete: 'DELETE',
};

function throwIfMissing(paramName: string = ''): string {
  throw new Error(`Missing parameter${paramName}`);
  // return '';
}

function send({url, method, headers, body}) {
  // fetch(request, { credentials: 'include' }),
  const contentType = headers['Content-Type'];
  const requestPromise = fetch(url, {
    method,
    headers,
    body: fetchBody(body, contentType),
  });

  return new Promise((resolve, reject) => {
    requestPromise
      .then(res => {
        if (!res.ok) {
          errorShow({
            url,
            method,
            headers,
            body,
            res,
          });
        }
        // const tr2 = new Date();
        // console.log(url, tr2 - tr1);

        return resolve(res);
      })
      .catch(e => {
        if (__DEV__) {
          errorShow({
            url,
            method,
            headers,
            body,
          });
        }
        // const tr2 = new Date();
        // console.log(url, tr2 - tr1);
        return reject(e);
      });
  });
}

function fetchBody(params, contentType) {
  switch (contentType) {
    case 'application/x-www-form-urlencoded':
    case 'application/x-www-form-urlencoded; charset=utf-8':
      return toQueryString(params);
    case 'application/json':
    case 'application/json; charset=utf-8':
      return JSON.stringify(params);
    default:
      break;
  }
  return undefined;
}

function fetchUrl(urlpath, method, params) {
  if (method === methodType.get) {
    return addParams(urlpath, params);
  }
  return urlpath;
}

function errorShow(data) {
  if (__DEV__) {
    console.log('network error:', data);
  }
}

// 参数转化
export const req = ({
  scheme = schemeType.http,
  host = apiHost,
  query,
  path,
  header,
  ...other
}) => {
  // const urlpath = `${scheme}://${host}${path}`;

  const urlpath = `${apiHostNative}${path}`;
  // console.log('urlpath', urlpath);

  const headers = header || httpHeaders();
  const url = !query ? urlpath : addParams(urlpath, query);
  return reqCache({
    url,
    headers,
    ...other,
  });
};

export const reqCache = async ({
  url,
  headers,
  body,
  method = methodType.get,
  cache,
  ...other
}) => {
  // 当没有cache 要求或者 不为get 请求则跳过cahce.

  if (cache === undefined && method === methodType.get) {
    // eslint-disable-next-line no-param-reassign
    cache = true;
  }

  if (!cache) {
    return reqClean({
      url,
      method,
      headers,
      body,
      ...other,
    });
  }
  const key = addParams(url, {...headers, ...body});
  const keyHash = `${getHashCode(key)}`;

  try {
    const cacheData = await getCache(keyHash);
    if (!cacheData) {
      throw new Error('没有缓存');
    }
    reqClean({
      url,
      method,
      headers,
      body,
      ...other,
    }).then(res => {
      setCache(keyHash, res);
    });

    return cacheData;
  } catch (e) {
    const data = await reqClean({
      url,
      method,
      headers,
      body,
      ...other,
    });
    setCache(keyHash, data);
    // console.log('e', e.message, data);
    return data;
  }
};

// 结果转化
export const reqClean = async params => {
  const response = await reqTimeout(params);
  const contentType = response.headers.get('content-type');
  const jsonTypes = ['application/json', 'text/plain'];
  const isJSON = jsonTypes.some(type => contentType.includes(type));
  if (isJSON) {
    return response.json();
  }
  return response.text();
};

export const reqTimeout = ({timeout = 10000, ...other}) => {
  const fetchPromise = send({
    ...other,
  });

  return Promise.race([
    fetchPromise,
    new Promise((_, reject) => {
      setTimeout(() => reject(new Error('请求超时')), timeout);
    }),
  ]);
};
