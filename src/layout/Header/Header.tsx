import { Button } from 'antd';
import clsx from 'clsx';

import useClassName from './styles';
import { Sun, Moon } from '../../icons';
import { useThemeData } from '../../context/ThemeData';

function Header() {
  const className = useClassName();
  const { themeData, changeThemeData } = useThemeData();

  const handleClick = () => {
    if (themeData.mode === 'dark') {
      changeThemeData({ mode: 'light' });
    } else {
      changeThemeData({ mode: 'dark' });
    }
  };

  return (
    <header className={clsx('layout-header', className)}>
      <div>
        <Button
          icon={themeData.mode === 'light' ? <Moon /> : <Sun />}
          onClick={handleClick}
        />
      </div>
    </header>
  );
}

export default Header;
