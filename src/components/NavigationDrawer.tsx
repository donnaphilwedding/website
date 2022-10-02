import { FC } from 'react';
import Drawer from 'react-modern-drawer';
import { Link } from 'react-router-dom';
import { NavigationPage } from './Header';

interface NavigationDrawerProps {
  open: boolean;
  onClose: () => void;
  pages: NavigationPage[];
}

export const NavigationDrawer: FC<NavigationDrawerProps> = ({ open, onClose, pages }) => {
  return (
    <Drawer direction="left" open={open} onClose={onClose}>
      <div className="flex flex-col">
        {pages.map(page => (
          <Link to={page.link} onClick={onClose}>{page.name}</Link>
        ))}
      </div>
    </Drawer>
  );
};
