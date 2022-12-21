import { type SeedToken } from 'antd/es/theme/interface';
import { Menu } from './Menu';

export default function ComponentOverrides(token: SeedToken) {
  return {
    ...Menu(token),
  };
}
