import { FC, useContext, useState } from 'react';
import { NavigationDrawer } from './NavigationDrawer';
import { FiMenu } from 'react-icons/fi';
import { ReactComponent as Break } from '../images/breakWhite.svg';
import { UserContext, UserType } from './auth/UserContext';

export interface NavigationPage {
  name: string;
  link: string;
}

interface HeaderProps {
  title?: string;
}

export const Header: FC<HeaderProps> = ({ title }) => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const { user } = useContext(UserContext);

  const dev = user >= UserType.DEV;

  const pages: NavigationPage[] = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Schedule',
      link: '/schedule'
    },
    {
      name: 'Travel',
      link: '/travel'
    },
    {
      name: 'Accommodation',
      link: '/accommodation'
    },
    {
      name: 'Gifts',
      link: '/gifts'
    },
    {
      name: 'FAQ',
      link: '/faq'
    },
    {
      name: 'Recommendations',
      link: '/recommendations'
    }
  ];

  if (dev) {
    pages.push({
      name: 'RSVP',
      link: '/rsvp'
    });
  }

  return (
    <div>
      <div className="bg-primary text-white flex justify-between items-center py-3 px-5 border-b border-gray-300">
        <div className="w-12 flex items-center">
          <button onClick={() => setDrawerOpen(true)}>
            <FiMenu className="w-8 h-8" />
          </button>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <Break className="h-10 w-64"></Break>
          {title ? (
            <div className="font-cormorantSc text-2xl">{title}</div>
          ) : (
            <div className="text-3xl flex-1 text-center font-calligraffitti mb-[-10px]">{'D&P'}</div>
          )}
          <Break className="h-10 w-64"></Break>
        </div>
        <div className="md:hidden text-3xl flex-1 text-center font-calligraffitti mb-[-10px]">{'D&P'}</div>
        <div className="w-12" />
      </div>
      <NavigationDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} pages={pages} />
    </div>
  );
};
