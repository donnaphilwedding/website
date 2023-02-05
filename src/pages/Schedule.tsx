import { FC, useContext } from 'react';
import { UserContext, UserType } from '../components/auth/UserContext';
import { InfoSection } from '../components/InfoSection';
import { PageContainer } from '../components/PageContainer';
import { PageTitleCard } from '../components/PageTitleCard';

export const Schedule: FC = () => {
  const { user } = useContext(UserContext);

  return (
    <PageContainer pageTitle="Schedule">
      <div className="flex flex-col items-center gap-5 py-10">
        <PageTitleCard name="Schedule" className="md:hidden" />
        <div className="flex flex-col gap-10 md:gap-5">
          <InfoSection secondary title="Provisional Schedule">
            <p>This is a work in progress schedule. Times are likely to change!</p>
          </InfoSection>
          {user !== UserType.WEDDING_PARTY ? (
            <InfoSection title="The Week Before">
              <p>
                During the week before the wedding, we’ll be holding a low key ceremony with just close friends and
                family.
              </p>
              <p>
                We’re choosing not to hold it on the main weekend to keep our plans on the Saturday as simple as
                possible- meaning we get to spend more time with people!
              </p>
            </InfoSection>
          ) : (
            <>
              <InfoSection title="Wednesday 16th September">
                <div>
                  <p className="font-bold">10:30 - 11:00: The Ceremony</p>
                  <div className="flex flex-col gap-3">
                    <p>We're holding the ceremony at 10:30 at the registry office in Oxford.</p>
                    <p>
                      The room we're using can only accommodate 23 people. We're hoping to include as many people as
                      possible, but we can't promise to fit absolutely everyone. Let us know beforehand if you want to
                      be present at the ceremony, and we'll try our best to make sure you're included!
                    </p>
                    <p>
                      We're not planning to do anything special for the ceremony. We'll basically just be doing the
                      signing of the contracts, rather than readings and personal vows, and we'll wait until later on to
                      do any group photos.
                    </p>
                    <p>Dress code: Casual</p>
                  </div>
                </div>
                <div>
                  <p className="font-bold">14:00 - 18:00: Garden Party at our house</p>
                  <div className="flex flex-col gap-3">
                    <p>
                      We'll be having a party in our garden, so people can come and see our house. More importantly,
                      people can come and meet Jessie!
                    </p>
                    <p>
                      Getting to Forest Hill: There are buses out of the city center, but it's probably easy and cheaper
                      to take a taxi between 4. Royal Cars (01865 777 333) are usually pretty good, and they have an app
                      which works a bit like Uber.
                    </p>
                  </div>
                </div>
                <div>
                  <p className="font-bold">18:00 - 21:00: Dinner at the Talkhouse</p>
                  <div className="flex flex-col gap-3">
                    <p>We're looking to book a meal at our local pub, which does great food.</p>
                    <p>
                      Getting to The Talkhouse: The pub is about half a mile's walk from our house. We'll likely have a
                      couple of drivers who can taxi anyone who needs it.
                    </p>
                    <p>
                      Getting back to Oxford: We strongly recommend pre-booking taxis. It's a bit of a pain for the
                      drivers to come out to where we live, so there's sometimes quite a long wait if you don't
                      pre-book.
                    </p>
                  </div>
                </div>
              </InfoSection>
            </>
          )}
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
