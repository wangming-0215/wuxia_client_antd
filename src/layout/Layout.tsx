import { Outlet } from 'react-router-dom';
import clsx from 'clsx';

import Header from './Header';
import SideBar from './SideBar';
import useClassName from './styles';

function Layout() {
  const className = useClassName();

  return (
    <div className={clsx('layout', className)}>
      <SideBar />
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
