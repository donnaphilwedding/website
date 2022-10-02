import { FC } from 'react';
import Drawer from 'react-modern-drawer';

interface NavigationDrawerProps {
  open: boolean;
  onClose: () => void;
}

export const NavigationDrawer: FC<NavigationDrawerProps> = ({ open, onClose }) => {
  return (
    <Drawer direction="left" open={open} onClose={onClose}>
      sdfsdfsdf
    </Drawer>
  );
};
