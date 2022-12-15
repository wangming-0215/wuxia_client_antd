/**
 * 加载状态
 */
export enum LoadingStatus {
  /**
   * 空闲
   */
  Idle = 'idle',
  /**
   * 加载中
   */
  Pending = 'pending',
  /**
   * 加载成功
   */
  Fulfilled = 'fulfilled',
  /**
   * 加载失败
   */
  Rejected = 'rejected',
}
