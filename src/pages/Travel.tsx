import { FC } from 'react';
import { InfoSection } from '../components/InfoSection';
import { PageContainer } from '../components/PageContainer';
import { PageTitleCard } from '../components/PageTitleCard';

export const Travel: FC = () => {
  return (
    <PageContainer pageTitle="Travel Advice">
      <div className="flex flex-col items-center gap-5 py-10">
        <PageTitleCard name="Travel Advice" className="md:hidden" />
        <div className="flex flex-col gap-10 md:gap-5 w-full">
          <InfoSection title="Arriving from the US">
            <p>
              If you’re coming from Heathrow, the{' '}
              <a className="underline" href="https://www.theairlineoxford.co.uk/">
                Oxford Airline
              </a>{' '}
              is a direct coach service. Buses leave from the central bus station every 30 minutes, and stop opposite
              the Eastgate Hotel.
            </p>
          </InfoSection>
          <InfoSection secondary title="Arriving from London">
            <p>
              If you’re coming from London, the{' '}
              <a className="underline" href="https://www.oxfordtube.com/">
                Oxford Tube
              </a>{' '}
              is well recommended. Buses leave from a few places, including Victoria and Marble Arch. The buses are
              every 20 minutes, and there's a stop very near the Eastgate.
            </p>
            <p>
              There are taxis available outside the train station, but Oxford's traffic system means that it will likely
              be faster to walk.
            </p>
          </InfoSection>
          <InfoSection title="Arriving by train">
            <p>
              The train station is about a mile from the Eastgate Hotel. Trains run directly from London Paddington or
              Marylebone. To get here from the north, you'll likely need to change at Birmingham New Street.
            </p>
            <p>
              There are taxis available outside the train station, but Oxford's traffic system means that it will likely
              be faster to walk.
            </p>
          </InfoSection>
          <InfoSection secondary title="Arriving by car">
            <p>
              Driving in central Oxford is fairly difficult. The Eastgate Hotel has a limited amount of parking, but it
              needs to be booked in advance.
            </p>
            <p>
              If you’re planning to drive, the best plan is to leave your car at Thornhill Park and Ride, and take the
              400 bus into the city.
            </p>
            <p>
              You could also park near our house in Forest Hill and get a taxi into the city. Let us know if you want to
              do this.
            </p>
          </InfoSection>
        </div>
      </div>
    </PageContainer>
  );
};
