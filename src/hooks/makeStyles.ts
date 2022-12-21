/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * inspired by https://github.com/ant-design/use-emotion-css
 */
import { css, CSSInterpolation } from '@emotion/css';
import { theme } from 'antd';
import { GlobalToken } from 'antd/es/theme/interface';

type StylesCreator<Props extends object, Token> = (
  token: Token,
  props: Props,
) => CSSInterpolation;

// function overloading
// overload signature
function makeStyles(
  stylesCreator: StylesCreator<{}, GlobalToken>,
): () => string;
function makeStyles<Props extends object = {}>(
  stylesCreator: StylesCreator<Props, GlobalToken>,
): (props: Props) => string;

// Implementation signature
function makeStyles(stylesCreator: any) {
  return function useClassName(props: any) {
    const { token } = theme.useToken();
    return css(stylesCreator(token, props));
  };
}

export default makeStyles;

// type MakeStylesReturnType<Props extends object> = keyof Props extends never
//   ? () => string
//   : (props: Props) => string;

// function makeStyles<Props extends object = {}>(
//   stylesCreator: StylesCreator<Props, GlobalToken>,
// ): MakeStylesReturnType<Props> {
//   return function useClassName(props?: any) {
//     const { token } = theme.useToken();
//     return css(stylesCreator(token, props));
//   };
// }

// export default makeStyles;
