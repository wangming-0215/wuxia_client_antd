import * as jose from 'jose';
import { createResponseComposition, context } from 'msw';

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
export function signToken(id: string) {
  return new jose.SignJWT({})
    .setProtectedHeader({ alg: 'HS256' })
    .setSubject(id)
    .setIssuedAt(new Date().getTime() / 1000)
    .setExpirationTime('7d')
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
    context.delay('real'),
    context.status(code),
    context.json(data),
  ]);
  return {
    status: code,
    data: data,
    send: composition,
  };
}
