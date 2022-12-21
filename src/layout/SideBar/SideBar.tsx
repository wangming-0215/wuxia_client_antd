import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { Menu } from 'antd';

import useClassName from './styles';
import { useBreakpoint } from '../../hooks';

function SideBar() {
  const className = useClassName();
  const breakpoint = useBreakpoint();

  if (!breakpoint.xl) {
    return null;
  }

  return (
    <div className={clsx('layout-sideBar', className)}>
      <div>
        <div className="header">千秋几世</div>
        <div className="menu">
          <Menu
            mode="vertical"
            selectedKeys={['members']}
            items={[
              {
                type: 'group',
                label: '管理',
                children: [
                  {
                    label: <Link to="/">帮派成员</Link>,
                    key: 'members',
                  },
                  {
                    label: '帮派活动',
                    key: 'activities',
                  },
                ],
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
