import { rest } from 'msw';
import { db } from './db';
import { getErrorMessage, createResponse } from './utils';

type LoginRequestBody = { username: string; password: string };

// invalid password: 403
export const handlers = [
  rest.post('/api/login', async (req) => {
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

      const response = createResponse(200, {
        status: 'success',
        code: 200,
        data: account,
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
  }),
];
