import { FC, useContext } from 'react';
import { UserContext, UserType } from '../components/auth/UserContext';
import { PageContainer } from '../components/PageContainer';
import { PageTitleCard } from '../components/PageTitleCard';

export const RSVP: FC = () => {
  const { user } = useContext(UserContext);

  const canView = user === UserType.DEV;

  return (
    <PageContainer pageTitle="RSVP">
      <div className="flex flex-col items-center gap-5 py-10">
        <PageTitleCard name="RSVP" className="md:hidden" />
        {!canView ? <div></div> : <div></div>}
      </div>
    </PageContainer>
  );
};
