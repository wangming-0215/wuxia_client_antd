import { type AxiosRequestConfig } from 'axios';

/**
 * 注入token
 * @param config
 * @returns
 */
export default function injectToken(config: AxiosRequestConfig) {
  if (config.jwt) {
    config.headers = { ...config.headers, Authorization: 'Bearer token' };
  }
  return config;
}
