import { FC } from 'react';
import { ImageLoader } from '../components/ImageLoader';
import { InfoSection } from '../components/InfoSection';
import { PageContainer } from '../components/PageContainer';
import { PageTitleCard } from '../components/PageTitleCard';
import { Question } from '../components/Question';
import Jessie from '../images/Jessie.jpg';

export const Faq: FC = () => {
  return (
    <PageContainer pageTitle="FAQ">
      <div className="flex flex-col items-center gap-5 py-10">
        <PageTitleCard name="FAQ" className="md:hidden" />
        <div className="flex flex-col items-center gap-5 w-full">
          <InfoSection title="Events" collapsible>
            <Question question="When is the ceremony?">
              <p>We're signing the contract earlier in the week, with just a few close family members.</p>
              <p>
                We decided to go as low key as possible with the ceremony, because we're more excited about seeing
                people and sharing Oxford with you!
              </p>
            </Question>
            <Question question="What is the dress code?">
              <p>
                For the Friday evening event, the dress code is smart casual. Jeans are totally fine, maybe with a nice
                shirt or something. Feel free to ignore this if you're travelling.
              </p>
              <p>
                For the Saturday, the dress code is smart, but very lenient. If people hate wearing suits/ties/dresses,
                they're absolutely encouraged to wear something they're comfortable with. eg. Phil plans to wear
                converses.
              </p>
            </Question>
            <Question question="Will there be places to leave bags and coats at the museum?">
              <p>
                We'll have a side room at the museum where people can leave stuff. In particular, if people want to walk
                there in comfortable shoes and change, that's totally fine.
              </p>
            </Question>
            <Question question="Will there be a quiet area in the museum?">
              <p>There's a couple of other small side rooms people can use if they need a quiet area.</p>
            </Question>
          </InfoSection>
          <InfoSection title="Accommodation" secondary collapsible>
            <Question question="How do we book hotel rooms at the Eastgate?">
              <p>Just let Donna or Phil know you want a room and we'll arrange one for you.</p>
            </Question>
            <Question question="Would an AirBnb be better than a hotel room?">
              <p>
                The AirBnb choice around Oxford isn't great. A room in a shared house is probably going to be over £100.
                There are some apartments and houses, but they're mostly in the outskirts of the city.
              </p>
            </Question>
            <Question question="Where can we park near the Eastgate hotel?">
              <p>
                Annoyingly, the parking isn't great near the Eastgate. Apparently they have a few parking spaces
                available, but they have to be booked in advance.
              </p>
              <p>We recommend using one of the park and rides, or parking in Forest Hill and getting a taxi.</p>
            </Question>
          </InfoSection>
          <InfoSection title="Food" collapsible>
            <Question question="When will we be eating on Saturday?">
              <p>We are aiming to serve dinner at 19:30 at the museum. There will also be canapes from 18:30.</p>
              <p>
                We'd originally hoped to get the food out earlier, but the caterers only get to start setting up at 5pm
                when the museum closes.
              </p>
            </Question>
            <Question question="Will there be a wedding cake?">
              <p>
                We haven't completely decided on this yet, but we're unlikely to have a traditional cake on the
                Saturday.
              </p>
              <p>
                Instead, we're going to have a dessert buffet, with a range of different options for people to snack out
                throughout the evening.
              </p>
            </Question>
          </InfoSection>
          <InfoSection title="Travel" secondary collapsible>
            <Question question="Where can I park near the museum?">
              <p>
                The museum itself doesn't have a car park. Their website recommends you park at the Westgate Center, or
                use the street parking on Mansfield Road, Keble Road and Blackhall Road.
              </p>
              <p>
                Farndon Road is another option- it's about a 15 minute walk from the museum, but has free parking after
                18:30 on a Saturday.
              </p>
            </Question>
            <Question question="Can we walk between the museum and the hotel?">
              <p>
                It takes about 15 minutes to walk from the museum to the hotel, and it's all in safe, well lit areas.
              </p>
              <p>
                If people would prefer to take a taxi, we recommend using Royal Cars (01865 777 333). They also have an
                Uber-like app where you can pre-book travel.
              </p>
            </Question>
          </InfoSection>
          <InfoSection title="Jessie" collapsible>
            <Question question="Will Jessie be at the wedding?">
              <p>Jessie will not be there. She's going to be staying at a local boarding kennel for the weekend.</p>
              <p>
                As heartbreaking as we find this, we need to remember that Jessie doesn't actually understand what she's
                missing out on, so won't feel left out.
              </p>
            </Question>
            <Question question="Who's a good dog?">
              <p>Jessie is a good dog.</p>
              <div
                className="w-[300px] h-[500px] bg-cover bg-center mx-auto rounded-md"
                style={{ backgroundImage: `url(${Jessie})` }}
              />
            </Question>
          </InfoSection>
        </div>
      </div>
      <ImageLoader url={Jessie} />
    </PageContainer>
  );
};
