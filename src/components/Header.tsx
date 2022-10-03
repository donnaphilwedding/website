import { FC, useState } from 'react';
import { NavigationDrawer } from './NavigationDrawer';
import { FiMenu } from 'react-icons/fi';

export interface NavigationPage {
  name: string;
  link: string;
}

export const Header: FC = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const pages: NavigationPage[] = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Schedule',
      link: '/schedule'
    }
  ];

  return (
    <div>
      <div className="bg-primary text-white flex justify-between items-center py-3 px-5">
        <div className="w-12">
          <button onClick={() => setDrawerOpen(true)}>
            <FiMenu />
          </button>
        </div>
        <div className="text-3xl flex-1 text-center lg:text-right font-calligraffitti mb-[-10px]">{'D&P'}</div>
        <div className="block lg:hidden w-12" />
      </div>
      <NavigationDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} pages={pages} />
    </div>
  );
};
