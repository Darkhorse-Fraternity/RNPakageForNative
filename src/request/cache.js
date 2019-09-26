import {Cache} from 'react-native-cache';
import AsyncStorage from '@react-native-community/async-storage';

const cache = new Cache({
  namespace: 'myapp',
  policy: {
    maxEntries: 50000,
  },
  backend: AsyncStorage,
});

export const setCache = (key, value) =>
  new Promise((resolve, reject) => {
    cache.setItem(key, value, err => {
      // key 'hello' is 'world' in cache
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
// cache.clearAll();
export const getCache = key =>
  new Promise((resolve, reject) => {
    // cache.clearAll();

    cache.getItem(key, (err, value) => {
      if (err) {
        reject(err);
      } else {
        resolve(value);
      }
    });
  });
