import { Button } from 'antd';
import clsx from 'clsx';

import useClassName from './styles';
import { Sun, Moon } from '../../icons';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { switchTheme } from '../../app/themeSlice';

function Header() {
  const className = useClassName();
  const dispatch = useAppDispatch();
  const themeMode = useAppSelector((state) => state.theme.mode);

  const handleClick = () => {
    if (themeMode === 'light') {
      dispatch(switchTheme('dark'));
    } else {
      dispatch(switchTheme('light'));
    }
  };

  return (
    <header className={clsx('layout-header', className)}>
      <div>
        <Button
          icon={themeMode === 'light' ? <Moon /> : <Sun />}
          onClick={handleClick}
        />
      </div>
    </header>
  );
}

export default Header;
