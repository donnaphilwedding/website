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
      name: "Home",
      link: "/"
    },
    {
      name: "Schedule",
      link: "/schedule"
    }
  ]

  return (
    <div>
      <div className="bg-primary text-white flex justify-between items-center p-3">
        <button onClick={() => setDrawerOpen(true)}>
          <FiMenu />
        </button>
        <div className="text-3xl font-calligraffitti mb-[-10px]">{'D&P'}</div>
        <div />
      </div>
      <NavigationDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} pages={pages} />
    </div>
  );
};
