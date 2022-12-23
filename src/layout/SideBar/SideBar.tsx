import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { Menu, type MenuProps } from 'antd';

import LogoImage from '../../assets/logo.png';
import { useBreakpoint } from '../../hooks';
import { HomeHeart, Alarm } from '../../icons';
import useClassName from './styles';

type MenuItem = Required<MenuProps>['items'][number];

const menuItems: MenuItem[] = [
  {
    type: 'group',
    label: '管理',
    children: [
      {
        label: <Link to="/">帮派成员</Link>,
        key: 'members',
        icon: <HomeHeart />,
      },
      {
        label: <Link to="/activity">帮派活动</Link>,
        key: 'activities',
        icon: <Alarm />,
      },
    ],
  },
];

function SideBar() {
  const className = useClassName();
  const breakpoint = useBreakpoint();

  if (!breakpoint.xl) {
    return null;
  }

  return (
    <div className={clsx('layout-sideBar', className)}>
      <div>
        <div className="header">
          <div className="logo">
            <img src={LogoImage} alt="秋" />
          </div>
          <div>千秋几世</div>
        </div>
        <div className="menu">
          <Menu mode="vertical" selectedKeys={['members']} items={menuItems} />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
