import { FC, useContext } from 'react';
import Drawer from 'react-modern-drawer';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './auth/UserContext';
import { FlowerBorderLogo } from './FlowerBorderLogo';
import { NavigationPage } from './Header';
import { NavigationDrawerLink } from './NavigationDrawerLink';

interface NavigationDrawerProps {
  open: boolean;
  onClose: () => void;
  pages: NavigationPage[];
}

export const NavigationDrawer: FC<NavigationDrawerProps> = ({ open, onClose, pages }) => {
  const navigate = useNavigate();
  const { userLogout } = useContext(UserContext);
  
  const logout = () => {
    userLogout();
    navigate("/login");
  }

  return (
    <Drawer direction="left" open={open} onClose={onClose}>
      <FlowerBorderLogo className="p-2" />
      <div className="flex flex-col">
        {pages.map(page => (
          <NavigationDrawerLink page={page} onClick={onClose} key={page.name} />
        ))}
        <button onClick={logout} className="px-5 py-2 text-left">Logout</button>
      </div>
    </Drawer>
  );
};
