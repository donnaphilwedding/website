import { FC } from 'react';
import { InfoSection } from '../components/InfoSection';
import { PageContainer } from '../components/PageContainer';
import { PageTitleCard } from '../components/PageTitleCard';

export const Travel: FC = () => {
  return (
    <PageContainer pageTitle="Travel Advice">
      <div className="flex flex-col items-center gap-5 py-10">
        <PageTitleCard name="Travel Advice" className="md:hidden" />
        <div className="flex flex-col gap-10 md:gap-5">
          <InfoSection title="Arriving from the US">
            <p>This is a work in progress schedule. Times are likely to change!</p>
          </InfoSection>
        </div>
      </div>
    </PageContainer>
  );
};
