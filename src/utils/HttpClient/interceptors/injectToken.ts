import { type AxiosRequestConfig } from 'axios';
import store from 'store2';
import { StorageKey } from '../../../constants';

/**
 * 注入token
 * @param config
 * @returns
 */
export default function injectToken(config: AxiosRequestConfig) {
  if (config.jwt) {
    const token = store.get(StorageKey.jwt);
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
  }
  return config;
}
