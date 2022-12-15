import { type ResponseResolver } from 'msw';
import { db } from '../db';
import { createResponse, getErrorMessage, signToken } from '../utils';

type LoginRequestBody = { username: string; password: string };

function createLoginResolver(): ResponseResolver {
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

export default createLoginResolver();
