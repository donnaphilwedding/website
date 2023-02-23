import { motion } from 'framer-motion';
import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext, UserType } from '../components/auth/UserContext';
import { Card } from '../components/card/Card';
import { CardContent } from '../components/card/CardContent';
import { CardSection } from '../components/card/CardSection';
import { PageContainer } from '../components/PageContainer';
import { PageTitleCard } from '../components/PageTitleCard';

export const Schedule: FC = () => {
  const { user } = useContext(UserContext);

  const weddingParty = user >= UserType.WEDDING_PARTY;

  return (
    <PageContainer pageTitle="Schedule">
      <motion.div layout className="flex flex-col items-center gap-5 py-10">
        <PageTitleCard name="Schedule" className="md:hidden" />
        <motion.div layout className="flex flex-col gap-10 md:gap-5 w-full">
          <Card secondary title="Provisional Schedule">
            <p>This is a work in progress schedule. Times are likely to change!</p>
          </Card>
          {!weddingParty ? (
            <Card title="The Week Before">
              <CardContent>
                During the week before the wedding, we’ll be holding a low key ceremony with just close friends and
                family.
              </CardContent>
              <CardContent>
                We’re choosing not to hold it on the main weekend to keep our plans on the Saturday as simple as
                possible- meaning we get to spend more time with people!
              </CardContent>
            </Card>
          ) : (
            <>
              <Card title="Wednesday 16th September" collapsible>
                <CardSection title="10:30 - 11:00: The Ceremony">
                  <CardContent>We're holding the ceremony at 10:30 at the registry office in Oxford.</CardContent>
                  <CardContent>
                    The room we're using can only accommodate 23 people. We're hoping to include as many people as
                    possible, but we can't promise to fit absolutely everyone. Let us know beforehand if you want to be
                    present at the ceremony, and we'll try our best to make sure you're included!
                  </CardContent>
                  <CardContent>
                    We're not planning to do anything special for the ceremony. We'll just be signing the contract, with
                    no readings or personal vows, and we'll wait until later on to do any group photos.
                  </CardContent>
                  <CardContent>
                    <b>Dress code:</b> Casual
                  </CardContent>
                </CardSection>
                <CardSection title="14:00 - 18:00: Garden Party at our house">
                  <p>We'll be having a party in our garden, so people can come and see our house.</p>
                  <p>More importantly, people can come and meet Jessie!</p>
                  <p>
                    <b>Dress code:</b> An excited labrador will probably jump on you.
                  </p>
                  <p>
                    <b>Getting to Forest Hill:</b> There are buses out of the city center, but it's probably easy and
                    cheaper to take a taxi between four people. Royal Cars (01865 777 333) are usually pretty good, and
                    they have an app which works a bit like Uber.
                  </p>
                </CardSection>
                <CardSection title="18:00 - 21:00: Dinner at the Talkhouse">
                  <p>We're looking to book a meal at our local pub, which does great food.</p>
                  <p>
                    <b>Getting to The Talkhouse:</b> The pub is about half a mile's walk from our house. We'll likely
                    have a couple of drivers who can give lifts to anyone who wants one.
                  </p>
                  <p>
                    <b>Getting back to Oxford:</b> We strongly recommend pre-booking taxis. It's a bit of a pain for the
                    drivers to come out to where we live, so there's sometimes quite a wait if you don't pre-book.
                  </p>
                </CardSection>
              </Card>
            </>
          )}
          <Card secondary title="Friday 15th September" collapsible>
            <CardSection title="15:00 - 17:00: Check in at Eastgate Hotel">
              <p>We’ll be hanging out in the lounge to greet any early arrivals.</p>
            </CardSection>
            <CardSection title="19:00 - Midnight: Cocktails at The House">
              <p>
                We’ve booked the upper floor of The House, which is just off High Street, around a five minute walk from
                the Eastgate Hotel.
              </p>
              <motion.iframe
          layout
          title={"7 Minute Walk to The House"}
          src={"https://www.google.com/maps/d/u/1/embed?mid=1iN-BZexdOpjJDEa4XFzqeOuGR4ah3Y0&ehbc=2E312F"}
          height="300"
          className="border rounded-sm"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></motion.iframe>
              <p>
                <b>Dress code:</b> Smart casual (ie. jeans are okay). Feel free to go more casual if you're travelling.
              </p>
            </CardSection>
          </Card>
          <Card title="Saturday 16th September" collapsible>
            <CardSection title="7:30 - 10:30: Breakfast at the Eastgate Hotel">
              <p>
                Even if you’re not staying at the hotel, you’re very welcome to come and say hi. We’ll be here most of
                the morning.
              </p>
            </CardSection>
            <CardSection title="11:00- 16:00: Free time around Oxford">
              <p>We haven't planned anything during the day on Saturday, so people should enjoy the city!</p>
              <p>
                You can find our recommendations for things to do and places to eat{' '}
                <Link className="underline" to="/recommendations">
                  here
                </Link>{' '}
                .
              </p>
            </CardSection>
            <CardSection title={`16:00 - ${weddingParty ? '17:30' : '18:00'}: Drinks at the Eastgate Hotel`}>
              <p>While the event is being set up, people can meet in the bar at the Eastgate Hotel.</p>
            </CardSection>
            {weddingParty && (
              <CardSection title="18:00 - 18:30: Wedding party photos outside museum">
                <p>
                  The wedding party will go to the museum a little bit before everyone else to do a few group photos
                  outside the museum.
                </p>
              </CardSection>
            )}
            <CardSection title="18:30: Welcome Reception at Oxford University Museum of Natural History">
              <p>Drinks and canapes will be provided.</p>
            </CardSection>
            <CardSection title="19:30: Dinner"></CardSection>
            <CardSection title="20:30: Speeches"></CardSection>
            <CardSection title="21:00 - 23:45: Museum at night">
              <p>
                People are free to enjoy the museum for the last few hours! There'll be a bar set up, and we're planning
                to have a few board game tables.
              </p>
            </CardSection>

            <div className="flex flex-col gap-3">
              <p>
                <b>Getting to the museum:</b> It's a fifteen minute walk to the museum, or a short taxi ride. We'll have
                a side room where we can store shoes if you want to walk there in comfortable ones and change at the
                event.
              </p>
              <p>
                Taxis in Oxford are fairly good, but we recommend pre-booking- it can get quite busy on a Saturday
                night.
              </p>
              <motion.iframe
          layout
          title={"15 Minute Walk to the Museum"}
          src={"https://www.google.com/maps/d/u/1/embed?mid=1NLtf9VrYCmtwxPrveTVc0znk_uTUOEw&ehbc=2E312F"}
          height="300"
          className="border rounded-sm"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></motion.iframe>
              <p>
                <b>Dress code:</b> Smart, but comfy! eg. Shirt and tie for men, cocktail dress for women, but if you
                don't like wearing ties/dresses/jackets/etc., no worries- feel free to wear something different. Phil
                will be wearing converses.
              </p>

              
            </div>
          </Card>
          <Card secondary title="Sunday 17th September" collapsible>
            <CardSection title="7:30 - 10:30: Breakfast at Eastgate Hotel"></CardSection>
            <CardSection title="12:00: TBA">
              <p>
                We're planning on doing something on the Sunday, but we're not sure what. We'll let people know when
                we've decided!
              </p>
            </CardSection>
          </Card>
        </motion.div>
      </motion.div>
    </PageContainer>
  );
};
