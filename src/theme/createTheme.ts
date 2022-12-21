import { theme } from 'antd';
import { ThemeConfig } from 'antd/es/config-provider/context';
import { type MapToken, type SeedToken } from 'antd/es/theme/interface';
import { darkAlgorithm, defaultAlgorithm } from './algorithm';
import { colorPrimary } from './token';
import ComponentOverrides from './overrides';

declare module 'antd/es/theme/interface/maps' {
  interface MapToken {
    mode: 'dark' | 'light';
  }
}

type Algorithm = (toke: SeedToken, mapToken?: MapToken) => MapToken;

export type ThemeMode = 'dark' | 'light';

/**
 * 主题
 * @param mode
 * @param compact
 * @returns
 */
function createTheme(
  mode: ThemeMode = 'light',
  compact: boolean = false,
): ThemeConfig {
  const algorithm = [
    defaultAlgorithm,
    mode === 'dark' && darkAlgorithm,
    compact && theme.compactAlgorithm,
  ].filter((item): item is Algorithm => Boolean(item));

  const seedToken = algorithm.reduce(
    (token, callback) => {
      return callback(token);
    },
    { ...theme.defaultSeed, colorPrimary },
  );

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).__SEED_TOKEN__ = seedToken;
  }

  return {
    algorithm,
    token: { colorPrimary },
    components: ComponentOverrides(seedToken),
  };
}

export default createTheme;
