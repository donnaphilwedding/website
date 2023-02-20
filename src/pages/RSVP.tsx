import { FC } from 'react';
import { PageContainer } from '../components/PageContainer';
import { PageTitleCard } from '../components/PageTitleCard';

export const RSVP: FC = () => {
  return (
    <PageContainer pageTitle="RSVP">
      <div className="flex flex-col items-center gap-5 py-10">
        <PageTitleCard name="RSVP" className="md:hidden" />
      </div>
    </PageContainer>
  );
};
