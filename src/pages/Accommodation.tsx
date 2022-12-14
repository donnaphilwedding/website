import { FC } from 'react';
import { InfoSection } from '../components/InfoSection';
import { PageContainer } from '../components/PageContainer';
import { PageTitleCard } from '../components/PageTitleCard';
import HotelBar from '../images/HotelBar.png';
import HotelLounge from '../images/HotelLounge.png';
import HotelExterior from '../images/HotelExterior.png';

export const Accommodation: FC = () => {
  return (
    <PageContainer pageTitle="Accommodation">
      <div className="flex flex-col items-center gap-5 py-10">
        <PageTitleCard name="Accommodation" className="md:hidden" />
        <div className="flex flex-col items-center gap-5 w-full">
          <InfoSection title="The Eastgate Hotel">
            <p>We’ve secured a block of rooms at the Eastgate Hotel in Oxford at a discounted rate.</p>
            <p>
              The hotel has a nice lounge area, and there are a number of cafes and restaurants within a short walk.
              We're hoping to have as many people stay there as possible, so we can spend time with people while things
              are a bit quieter.
            </p>
          </InfoSection>
          <div className="flex gap-5 flex-col sm:flex-row w-full">
            <div
              className="w-full h-[30vh] rounded-none sm:rounded-lg bg-cover bg-center sm:bg-bottom"
              style={{ backgroundImage: `url(${HotelBar})` }}
            />
            <div
              className="w-full h-[30vh] rounded-none sm:rounded-lg bg-cover bg-center sm:bg-bottom"
              style={{ backgroundImage: `url(${HotelLounge})` }}
            />
          </div>
          <InfoSection title="Booking Rooms" secondary>
            <p>
              There should be enough rooms for everyone who wants to stay. If you want a room, please let us know when
              you RSVP!
            </p>
            <p>
              We'll need to finalise the booking by July 1st. Rooms may be available after this, but not at the discounted rate.
            </p>
          </InfoSection>
          <div
              className="w-full h-[50vh] sm:h-[70vh] rounded-none sm:rounded-lg bg-cover bg-center"
              style={{ backgroundImage: `url(${HotelExterior})` }}
            />
        </div>
      </div>
    </PageContainer>
  );
};
