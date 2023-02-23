import { FC, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { Card } from '../Card';
import { PageContainer } from '../PageContainer';
import { PageTitleCard } from '../PageTitleCard';
import { UserContext, UserType } from './UserContext';

export const RequireDev: FC = () => {
  const { user } = useContext(UserContext);

  if (user === UserType.DEV) {
    return <Outlet />;
  }

  return (
    <PageContainer pageTitle="Under Construction">
      <div className="flex flex-col items-center gap-5 py-10">
        <PageTitleCard name="Under Construction" className="md:hidden" />
        <Card>
          Oops! This page isn't meant to be available yet. Please tell Phil that he needs to hurry up. Or, he's
          accidentally locked people out of an important part of the site.
        </Card>
      </div>
    </PageContainer>
  );
};
