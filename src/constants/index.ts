export const regex = {
  /**
   * 用户名校验，4到16位（字母，数字，下划线，减号）
   */
  username: /^[a-zA-Z0-9_-]{4,16}$/,
  /**
   * 密码强度校验，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
   */
  password:
    /^\S*(?=\S{6,20})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/,
};

/**
 * key of local storage
 */
export const StorageKey = {
  jwt: 'JWT_TOKEN',
  theme: 'APP_THEME',
} as const;
