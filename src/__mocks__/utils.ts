import * as jose from 'jose';
import { createResponseComposition, context, ResponseResolver } from 'msw';

export function isString(input: unknown): input is string {
  return typeof input === 'string';
}

export function isError(input: unknown): input is Error {
  return input instanceof Error;
}

export function getErrorMessage(input: unknown) {
  if (isString(input)) {
    return input;
  }
  if (isError(input)) {
    return input.message;
  }
  return 'Unknown';
}

export const secret = new TextEncoder().encode('wang_xiao_ming@wuxia');

/**
 * 签发token
 * @param id
 * @returns
 */
export function signToken(id: string = '') {
  return new jose.SignJWT({ id })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuer('wuxia_client')
    .setIssuedAt(Math.floor(new Date().getTime() / 1000))
    .setExpirationTime('5d')
    .sign(secret);
}

/**
 * 验证 token
 * @param token
 * @returns
 */
export function verifyToken(token: string) {
  return jose.jwtVerify(token, secret);
}

export function createResponse<T>(code: number, data: T) {
  const composition = createResponseComposition(undefined, [
    context.delay(2000),
    context.status(code),
    context.json(data),
  ]);
  return {
    status: code,
    data: data,
    send: composition,
  };
}

export function createErrorResponse(error: Error) {
  switch (error.name) {
    case 'JWTExpired': {
      return createResponse(401, {
        status: 'fail',
        code: 401,
        data: null,
        error: error.stack,
        message: 'Token Expired',
      });
    }
    case 'JWSInvalid': {
      return createResponse(401, {
        status: 'fail',
        code: 401,
        data: null,
        error: error.stack,
        message: 'Invalid Token',
      });
    }
    default: {
      return createResponse(500, {
        status: 'fail',
        code: 500,
        data: null,
        error: error.stack,
        message: 'Internal Server Error',
      });
    }
  }
}

type MockRequest = Parameters<ResponseResolver>[0];
export async function checkToken(req: MockRequest) {
  const authorization = req.headers.get('authorization');
  const token = authorization?.slice(7);
  return verifyToken(token || '');
}
