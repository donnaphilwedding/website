import { FC } from 'react';
import { InfoSection } from '../components/InfoSection';
import { PageContainer } from '../components/PageContainer';
import { PageTitleCard } from '../components/PageTitleCard';

export const Accommodation: FC = () => {
  return (
    <PageContainer pageTitle="Accommodation">
      <div className="flex flex-col items-center gap-5 py-10">
        <PageTitleCard name="Accommodation" className="md:hidden" />
        <div className="flex flex-col gap-10 md:gap-5 w-full">
          <InfoSection title="The Eastgate Hotel">
            <p>
              We’ve secured a block of rooms at the Eastgate Hotel in Oxford at a discounted rate.
            </p>
            <p>
              The hotel has a nice lounge area, and there are a number of cafes and restaurants within a short walk. We're hoping to have as many people stay there as possible, so we can spend time with people while things are a bit quieter.
            </p>
            <p>
              There should be enough rooms for everyone who wants to stay, but we will need to finalise the booking in early July. If you want a room, please let us know when you RSVP!
            </p>
          </InfoSection>
        </div>
      </div>
    </PageContainer>
  );
};
