import { HttpClient } from '../../utils';

const http = HttpClient.instance;

/**
 * 登录
 * @param username
 * @param password
 * @returns
 */
export function signIn(username: string, password: string) {
  return http.post<HttpResponse<{ token: string }>>('/api/signin', {
    username,
    password,
  });
}
