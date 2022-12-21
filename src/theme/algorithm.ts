import { theme } from 'antd';
import { type SeedToken, type MapToken } from 'antd/es/theme/interface';

export function defaultAlgorithm(token: SeedToken): MapToken {
  return {
    ...theme.defaultAlgorithm(token),
    mode: 'light',
  };
}

export function darkAlgorithm(token: SeedToken, mapToken?: MapToken): MapToken {
  return {
    ...theme.darkAlgorithm(token, mapToken),
    mode: 'dark',
  };
}
