import React from 'react';
import { type GlobalToken } from 'antd/es/theme/interface';
import { useToken } from 'src/hooks';

type StyleCreator<Props, Token> = (
  token: Token,
  props?: Props,
) => Record<string, React.CSSProperties>;

/**
 * makeStyles
 *
 * antd v5.0 版本虽然使用了 css-in-js，但是并没有开放接口在自定义组件中使用 design token，官方文档页只提供了 `useToken` + `style`。
 * 但是，如果直接在 jsx 中写 style，可能会影响阅读体验。
 * 所以写了这个简单的 API，把 style 的内容从 jsx 中分离出来。
 *
 * usage:
 *
 * ```tsx
 * const useStyles = makeStyles<{ large: boolean}>((token, props) => ({
 *   root: {
 *      fontSize: props?.large ? token.fontSize * 10 : token.fontSize,
 *    }
 * }));
 *
 * function HelloWorld() {
 *    const styles = useStyles();
 *
 *    return <div style={styles.root}>Hello World</div>
 * }
 * ```
 * @param styleCreator
 * @returns
 */
function makeStyles<Props>(styleCreator?: StyleCreator<Props, GlobalToken>) {
  return function useStyles(props?: Props) {
    const { token } = useToken();
    return styleCreator?.(token, props) ?? {};
  };
}

export default makeStyles;
