import { type ResponseResolver } from 'msw';
import { db } from '../db';
import { createResponse, getErrorMessage, signToken } from '../utils';

type LoginRequestBody = { username: string; password: string };

/**
 * create login resolver
 * @returns
 */
export function createLoginResolver(): ResponseResolver {
  return async function resolver(req) {
    try {
      const { username, password } = await req.json<LoginRequestBody>();
      const account = db.account.findFirst({
        where: { username: { equals: username } },
      });
      if (!account) {
        const response = createResponse(404, {
          status: 'fail',
          code: 404,
          data: null,
          error: null,
          message: '账号不存在',
        });
        return response.send();
      }
      if (password !== account.password) {
        const response = createResponse(403, {
          status: 'fail',
          code: 403,
          data: null,
          error: null,
          message: '用户名或密码不正确',
        });
        return response.send();
      }

      const token = await signToken(account.id);

      const response = createResponse(200, {
        status: 'success',
        code: 200,
        data: { token },
        error: null,
        message: 'success',
      });
      return response.send();
    } catch (err) {
      const response = createResponse(500, {
        status: 'fail',
        code: 500,
        data: null,
        error: (err as Error)?.stack,
        message: getErrorMessage(err),
      });
      return response.send();
    }
  };
}

/**
 * create profile resolver
 * @returns
 */
export function createProfileResolver(): ResponseResolver {
  return (req) => {
    console.log(req);
    const response = createResponse(401, {
      status: 'fail',
      code: 401,
      data: null,
      error: null,
      message: '未认证',
    });
    return response.send();
  };
}
