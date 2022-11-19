import { FC } from 'react';
import { Link } from 'react-router-dom';
import { NavigationPage } from './Header';

interface NavigationDrawerLinkProps {
  page: NavigationPage;
  onClick: () => void;
}

export const NavigationDrawerLink: FC<NavigationDrawerLinkProps> = ({ page, onClick }) => {
  return (
    <Link to={page.link} onClick={onClick} className="px-5 py-2">
      {page.name}
    </Link>
  );
};
