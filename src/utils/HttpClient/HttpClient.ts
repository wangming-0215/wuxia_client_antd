import axios, { type AxiosRequestConfig } from 'axios';
import { injectToken } from './interceptors';

declare module 'axios' {
  interface AxiosRequestConfig {
    jwt?: boolean;
  }
}

type Interceptor<R> = (arg: R) => R;

function interceptorFactory<R>(...interceptors: Interceptor<R>[]) {
  return function interceptor(arg: R) {
    return interceptors.reduce((acc, callback) => callback(acc), arg);
  };
}

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  const interceptor = interceptorFactory<AxiosRequestConfig>(injectToken);
  return interceptor(config);
}, undefined);

instance.interceptors.response.use(undefined, (error) => {
  const interceptor = interceptorFactory();
  return Promise.reject(interceptor(error));
});

const HttpClient = { instance };

export default HttpClient;
