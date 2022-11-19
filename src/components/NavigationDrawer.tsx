import { FC } from 'react';
import Drawer from 'react-modern-drawer';
import { FlowerBorderLogo } from './FlowerBorderLogo';
import { NavigationPage } from './Header';
import { NavigationDrawerLink } from './NavigationDrawerLink';

interface NavigationDrawerProps {
  open: boolean;
  onClose: () => void;
  pages: NavigationPage[];
}

export const NavigationDrawer: FC<NavigationDrawerProps> = ({ open, onClose, pages }) => {
  return (
    <Drawer direction="left" open={open} onClose={onClose}>
      <FlowerBorderLogo className="p-2" />
      <div className="flex flex-col">
        {pages.map(page => (
          <NavigationDrawerLink page={page} onClick={onClose} />
        ))}
      </div>
    </Drawer>
  );
};
