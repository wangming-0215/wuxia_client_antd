/**
 * 睡眠
 * @param delay 睡眠时长，单位：秒
 * @returns
 */
export default function sleep(delay: number): Promise<void> {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve(), delay * 1000);
  });
}
