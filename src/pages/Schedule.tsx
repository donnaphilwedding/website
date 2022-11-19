import { FC } from 'react';
import { InfoSection } from '../components/InfoSection';
import { PageContainer } from '../components/PageContainer';
import { PageTitleCard } from '../components/PageTitleCard';

export const Schedule: FC = () => {
  return (
    <PageContainer pageTitle="Schedule">
      <div className="flex flex-col items-center gap-5 py-10">
        <PageTitleCard name="Schedule" className="md:hidden" />
        <div className="flex flex-col gap-10 md:gap-5">
          <InfoSection secondary title="Provisional Schedule">
            <p>This is a work in progress schedule. Times are likely to change!</p>
          </InfoSection>
          <InfoSection title="The Week Before">
            <p>During the week before the wedding, we’ll be holding a low key ceremony with just close friends and family.</p>
            <p>
              We’re choosing not to hold it on the main weekend to keep our plans on the Saturday as simple as possible-
              meaning we get to spend more time with people!
            </p>
          </InfoSection>
          <InfoSection secondary title="Friday 15th September">
            <div>
              <p className="font-bold">15:00 - 17:00: Check in at Eastgate Hotel</p>
              <p>We’ll be hanging out in the lounge to greet any early arrivals.</p>
            </div>
            <div>
              <p className="font-bold">19:00 - Midnight: Cocktails at The House</p>
              <div className="flex flex-col gap-3">
                <p>
                  We’ve booked the upper floor of The House, which is just off High Street, around a five minute walk
                  from the Eastgate Hotel.
                </p>
                <p>
                  <b>Dress code:</b> Smart casual (ie. jeans are okay). Feel free to go more casual if you're
                  travelling.
                </p>
              </div>
            </div>
          </InfoSection>
          <InfoSection title="Saturday 16th September">
            <div>
              <p className="font-bold">7:30 - 10:30: Breakfast at the Eastgate Hotel</p>
              <p>
                Even if you’re not staying at the hotel, you’re very welcome to come and say hi. We’ll be here most of
                the morning.
              </p>
            </div>
            <div>
              <p className="font-bold">16:00 - 17:30: Drinks at the Eastgate Hotel</p>
              <div className="flex flex-col gap-3">
                <p>While the event is being set up, people can meet in the bar at the Eastgate Hotel.</p>
              </div>
            </div>
            <div>
              <p className="font-bold">18:00: Welcome Reception at Oxford University Museum of Natural History</p>
              <p>Drinks and canapes will be provided.</p>
            </div>
            <div>
              <p className="font-bold">19:30: Dinner</p>
            </div>
            <div>
              <p className="font-bold">20:30: Speeches</p>
            </div>
            <div>
              <p className="font-bold">21:00 - Midnight: Museum at night</p>
              <p>There'll be a bar set up. We'll have board games and music.</p>
            </div>
            <div className="flex flex-col gap-3">
              <p>
                <b>Getting there:</b> It's a fifteen minute walk to the museum, or a short taxi ride. We'll have a side
                room where we can store shoes if you want to walk there in comfortable ones and change at the event.
              </p>
              <p>
                Taxis in Oxford are fairly good, but we recommend pre-booking- it can get quite busy on a Saturday
                night.
              </p>
              <p>
                <b>Dress code:</b> Comfy smart. If you hate wearing ties/dresses, no worries- feel free to wear
                something different!
              </p>
            </div>
          </InfoSection>
          <InfoSection secondary title="Sunday 17th September">
            <div>
              <p className="font-bold">7:30 - 10:30: Breakfast at Eastgate Hotel</p>
              <p>We’ll be hanging out in the lounge to greet any early arrivals.</p>
            </div>
            <div>
              <p className="font-bold">12:00: TBA</p>
              <div className="flex flex-col gap-3">
                <p>
                  We're planning a small event on the Sunday before people leave. Possibly booking a cinema screen?
                  We'll update people when we decide.
                </p>
              </div>
            </div>
          </InfoSection>
        </div>
      </div>
    </PageContainer>
  );
};
