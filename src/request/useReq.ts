import React, {useState, useEffect} from 'react';
import {apiHost, apiHostNative, httpHeaders} from '../configure/reqConfigs';
import {addParams, toQueryString} from './useMeth';
import {reqCache, reqProps} from './index';
// export const schemeType = {
//   http: 'http',
//   https: 'https',
// };

// export const methodType = {
//   get: 'GET',
//   post: 'POST',
//   head: 'HEAD',
//   put: 'PUT',
//   delete: 'DELETE',
// };

// // 参数转化
// interface parasProps {
//   scheme?: string;
//   host?: string;
//   query?: object;
//   body?: object;
//   path?: string;
//   header?: string;
//   method?: string;
// }

// function fetchBody(params, contentType): BodyInit {
//   switch (contentType) {
//     case 'application/x-www-form-urlencoded':
//     case 'application/x-www-form-urlencoded; charset=utf-8':
//       return toQueryString(params);
//     case 'application/json':
//     case 'application/json; charset=utf-8':
//       return JSON.stringify(params);
//     default:
//       break;
//   }
//   return '';
// }

interface parasProps {
  pending?: boolean;
  error?: null;
  result?: any;
}

export const useFetch = <T extends {}>(params: reqProps) => {
  const [data, setData] = useState({
    pending: false,
    error: null,
    result: null,
  });
  const {host, path, header, query, ...other} = params;
  const otherParamString = JSON.stringify(other);
  const urlpath = `${apiHostNative}${path}`;
  const headers = header || httpHeaders();
  const headersString = JSON.stringify(headers);
  const url = !query ? urlpath : addParams(urlpath, query);

  // const {pending, error, result, abort} = useReq(getQuestionListParams);
  useEffect(() => {
    // Update the document title using the browser API
    setData({pending: true, error: null, result: null});
    try {
      const fetchData = async () => {
        const result = await reqCache({
          url,
          headers,
          ...other,
        });
        setData({
          pending: false,
          error: null,
          result,
        });
      };
      fetchData();
    } catch (error) {
      setData({pending: false, error: error, result: null});
    }
  }, [url, headersString, otherParamString]);

  return data;
};
// export const useReq = ({
//   scheme = schemeType.http,
//   host = apiHostNative,
//   query,
//   path,
//   header,
//   method = methodType.get,
//   body,
//   ...other
// }: parasProps) => {
//   const urlpath = `${host}${path}`;
//   const headers = header || httpHeaders();
//   const url = !query ? urlpath : addParams(urlpath, query);
//   const contentType = headers['Content-Type'];
//   const res = useFetch(url, {
//     method,
//     headers,
//     body: fetchBody(body, contentType),
//   });
//   //   const {pending, error, result, abort} = res;
//   console.log('res', res);

//   return res;
// };
