import { FC, useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { PageContainer } from '../PageContainer';
import { UserContext, UserType } from './UserContext';

export const RequireLogin: FC = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user === UserType.NONE) {
      navigate('/login');
    }
  }, [navigate, user]);

  if (user !== UserType.NONE) {
    return <Outlet />;
  }

  return <PageContainer noHeader>You must be logged in to view this page</PageContainer>;
};
