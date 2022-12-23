import { Outlet } from 'react-router-dom';
import clsx from 'clsx';

import Header from './Header';
import SideBar from './SideBar';
import Content from './Content';
import useClassName from './styles';

function Layout() {
  const className = useClassName();

  return (
    <div className={clsx('layout', className)}>
      <SideBar />
      <Header />
      <Content>
        <Outlet />
      </Content>
    </div>
  );
}

export default Layout;
