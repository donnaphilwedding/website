import { FC } from 'react';
import { InfoSection } from '../components/InfoSection';
import { PageContainer } from '../components/PageContainer';
import { PageTitleCard } from '../components/PageTitleCard';

export const Schedule: FC = () => {
  return (
    <PageContainer pageTitle="Schedule">
      <div className="flex flex-col items-center gap-5 py-10">
        <PageTitleCard name="Schedule" className="md:hidden" />
        <InfoSection title="The Week Before" className="flex flex-col gap-5">
          <p>During the week before the wedding, we’ll be holding a low key ceremony with close friends and family.</p>
          <p>
            We’re choosing not to hold it on the main weekend to keep our plans on the Saturday as simple as possible,
            meaning we get to spend more time with people!
          </p>
        </InfoSection>
        <InfoSection secondary title="Friday 15th September" className="flex flex-col gap-5">
          <div>
            <p className="font-bold">15:00 - 17:00: Check in at Eastgate Hotel.</p>
            <p>We’ll be hanging out in the lounge to greet any early arrivals.</p>
          </div>
          <div>
            <p className="font-bold">19:00: Cocktails at The House.</p>
            <div className="flex flex-col gap-3">
              <p>
                We’ve booked the upper floor of The House, which is just off High Street, around a five minute walk from
                the Eastgate Hotel.
              </p>
              <p>
                <b>Dress code:</b> Smart casual (ie. jeans are okay). Feel free to go more casual if you're travelling.
              </p>
            </div>
          </div>
        </InfoSection>
        <InfoSection title="Saturday 16th September" className="flex flex-col gap-5">
          <div>
            <p className="font-bold">7:30 - 10:30: Breakfast at the Eastgate Hotel.</p>
            <p>
              Even if you’re not staying at the hotel, you’re very welcome to come and say hi. We’ll be here most of the
              morning.
            </p>
          </div>
          <div>
            <p className="font-bold">16:00: Drinks at the Eastgate Hotel.</p>
            <div className="flex flex-col gap-3">
              <p>While the event is being set up, people can meet in the bar at the Eastgate Hotel.</p>
            </div>
          </div>
          <div>
            <p className="font-bold">18:30: Welcome Reception at Oxford University Museum of Natural History.</p>
            <p className="font-bold"></p>
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
              <b>Getting there:</b> It's a fifteen minute walk to the museum, or a short taxi ride. We'll have a room for storing shoes if you
              want to walk in comfier shoes.
            </p>
            <p>We'll have a room for storing shoes if you want to walk there/back in comfier shoes.</p>
            <p>
              Taxis in Oxford are fairly good, but we recommend pre-booking- it can get quite busy on a Saturday night.
            </p>
            <p>
              <b>Dress code:</b> Smart, but comfortable. If you hate wearing a tie, a nice shirt is totally fine!
            </p>
          </div>
        </InfoSection>
      </div>
    </PageContainer>
  );
};
