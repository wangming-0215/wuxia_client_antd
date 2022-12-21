import { type SeedToken } from 'antd/es/theme/interface';
import { ThemeConfig } from 'antd/es/config-provider/context';

export function Menu(token: SeedToken): ThemeConfig['components'] {
  return {
    Menu: {
      colorItemText: 'rgb(209, 213, 219)',
      colorItemBg: 'transparent',
      colorItemTextSelected: token.colorPrimary,
      colorItemTextHover: 'rgb(209, 213, 219)',
      colorItemBgHover: 'rgba(255, 255, 255, 0.08)',
      colorItemBgSelected: 'rgba(255, 255, 255, 0.08)',
      colorActiveBarBorderSize: 0,
      colorGroupTitle: 'rgb(107, 114, 128)',
    },
  };
}
