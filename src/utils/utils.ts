/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from 'axios';

/**
 * 睡眠
 * @param delay 睡眠时长，单位：秒
 * @returns
 */
export function sleep(delay: number): Promise<void> {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve(), delay * 1000);
  });
}

export function isPlainObject(
  item: unknown,
): item is Record<keyof any, unknown> {
  return (
    item !== null && typeof item === 'object' && item.constructor === Object
  );
}

export interface DeepmergeOptions {
  clone?: boolean;
}

/**
 * merge
 * @param target
 * @param source
 * @param options
 * @returns
 */
export default function deepmerge<T>(
  target: T,
  source: unknown,
  options: DeepmergeOptions = { clone: true },
): T {
  const output = options.clone ? { ...target } : target;

  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach((key) => {
      // Avoid prototype pollution
      if (key === '__proto__') {
        return;
      }

      if (
        isPlainObject(source[key]) &&
        key in target &&
        isPlainObject(target[key])
      ) {
        // Since `output` is a clone of `target` and we have narrowed `target` in this block we can cast to the same type.
        (output as Record<keyof any, unknown>)[key] = deepmerge(
          target[key],
          source[key],
          options,
        );
      } else {
        (output as Record<keyof any, unknown>)[key] = source[key];
      }
    });
  }

  return output;
}

/**
 * 异常信息
 * @param error
 */
export function getErrorInfo(error: unknown) {
  if (axios.isAxiosError(error)) {
    return error.response?.data;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return 'Unknown';
}

/**
 * 异常文本信息
 * @param error
 * @returns
 */
export function getErrorMessage(error: unknown) {
  if (typeof error === 'string') return error;
  return (error as HttpError | undefined)?.message ?? 'Unknown Error';
}
