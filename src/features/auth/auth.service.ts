import store from 'store2';
import { StorageKey } from '../../constants';
import { HttpClient } from '../../utils';
import type { Account } from './typing';

const http = HttpClient.instance;

/**
 * 登录
 * @param username
 * @param password
 * @returns
 */
export async function login(username: string, password: string) {
  const response = await http.post<HttpResponse<{ token: string }>>(
    '/api/login',
    {
      username,
      password,
    },
  );
  const { token } = response.data.data;
  store.set(StorageKey.jwt, token);
  return response;
}

/**
 * 退出
 */
export function logout() {
  store.remove(StorageKey.jwt);
}

/**
 * 登录用户信息
 * @returns
 */
export function profile() {
  return http.get<HttpResponse<Account>>('/api/profile', { jwt: true });
}
