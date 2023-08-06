import { FC } from 'react';
import { ImageLoader } from '../components/ImageLoader';
import { Card } from '../components/card/Card';
import { PageContainer } from '../components/PageContainer';
import { PageTitleCard } from '../components/PageTitleCard';
import { Question } from '../components/Question';
import Jessie from '../images/Jessie.jpg';
import { motion } from 'framer-motion';

export const Faq: FC = () => {
  return (
    <PageContainer pageTitle="FAQ">
      <div className="flex flex-col items-center gap-5 py-10">
        <PageTitleCard name="FAQ" className="md:hidden" />
        <div className="flex flex-col items-center gap-5 w-full">
          <Card title="Events" collapsible>
            <Question question="When is the ceremony?">
              <p>
                We're signing the contract at a registry office earlier in the week, with just a few close family
                members.
              </p>
              <p>
                On the Saturday night, we're not doing any kind of ceremony. We decided we wanted to prioritise spending
                time with people and enjoying the museum!
              </p>
            </Question>
            <Question question="Will there be places to leave bags and coats at the museum?">
              <p>
                We'll have a side room at the museum where people can leave stuff. In particular, if people want to walk
                there in comfortable shoes and change, that's totally fine.
              </p>
            </Question>
            <Question question="Why is there no red wine?">
              <p>
                The natural history museum is a listed building, so there are quite a few restrictions on what can be
                served. The biggest concern is the original stone floor- if a dark coloured drink gets spilt on it, it's
                incredibly difficult to remove the stain.
              </p>
              <p>
                As a result, the bar will have a slightly reduced menu- apologies if they don't have your favourite
                drink! We'll also need to be careful with coffee- you'll need to be sitting at a table to drink it.
              </p>
            </Question>
            <Question question="What happens if I spill a drink or drop food?">
              <p>
                Let the museum staff know straight away. It'll probably be fine, but they might need to treat the floor
                to prevent staining.
              </p>
            </Question>
            <Question question="Will there be a quiet area in the museum?">
              <p>There's a couple of other small side rooms people can use if they need a quiet area.</p>
            </Question>
            <Question question="Can I bring my partner?">
              <p>
                Of course! We'll need to know by late August if you're bringing someone, because we'll need to sort out
                the seating plan and the food order. No worries if they weren't named on the invite.
              </p>
            </Question>
            <Question question="Are children welcome at the events?">
              <p>
                Yes! For the cocktail bar, we have a private room booked, but they won't be allowed in the downstairs
                main bar area. For the museum party, some of the exhibits are touch friendly, but not all, so they'll
                need a bit of supervision.
              </p>
            </Question>
          </Card>
          <Card title="Dress Codes" collapsible secondary>
            <Question question="What is the dress code?">
              <p>
                For the Friday evening event, the dress code is smart casual. Phil will be wearing jeans and a nice
                shirt. If you're travelling, don't worry about it too much.
              </p>
              <p>
                For the Saturday, the dress code is smart, but very lenient. If people hate wearing suits/ties/dresses,
                they're absolutely encouraged to wear something they're comfortable with. Phil plans to wear converses.
              </p>
            </Question>
            <Question question="What colour are the bridesmaids wearing?">
              <p>
                The bridesmaids will be wearing purple dresses, but we're totally fine with other people wearing purple
                if they have a garment they're excited to wear.
              </p>
            </Question>
          </Card>
          <Card title="Accommodation" collapsible>
            <Question question="Where can we park near the Eastgate hotel?">
              <p>
                Annoyingly, the parking isn't great near the Eastgate. Apparently they have a few parking spaces
                available, but they have to be booked in advance.
              </p>
              <p>
                If you're staying for just the weekend, we recommend using the local park and ride. If you're staying
                for longer, we recommend parking in Forest Hill and getting a taxi.
              </p>
              <motion.iframe
                layout
                title={'Park and Rides Around Oxford'}
                src={'https://www.google.com/maps/d/embed?mid=1tM_XZ6OL9FFR9vJeYKjLUBpHubM&ehbc=2E312F'}
                height="300"
                className="border rounded-sm"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></motion.iframe>
            </Question>
          </Card>
          <Card title="Food" collapsible secondary>
            <Question question="When will we be eating on Saturday?">
              <p>We are aiming to serve dinner at 19:30 at the museum. There will also be canapes from 18:30.</p>
              <p>
                We'd originally hoped to get the food out earlier, but the caterers only get to start setting up at 5pm
                when the museum closes.
              </p>
              <p>
                The Eastgate bar has a selection of snacks, so we recommend people grab something there if they're used
                to eating earlier.
              </p>
            </Question>
            <Question question="What will the menu be?">
              <p>We may make small changes to this closer to the time, but here's the current plan.</p>
              <p>
                The canapes are likely to be:
                <ul>
                  <li>- Sundried tomato bruschetta (vegan)</li>
                  <li>- Asparagus and cream cheese on toasted rye (vegan)</li>
                  <li>- Mac and cheese croquette</li>
                  <li>- Lamb skewer with salsa verde</li>
                  <li>- Mini chicken pie</li>
                  <li>- Steak and chip</li>
                </ul>
              </p>
              <p>
                We'll be doing a buffet for the main course.
                <ul>
                  <li>- Roast beef and yorkshire puddings</li>
                  <li>- Chicken supreme</li>
                  <li>- Lentil and beetroot wellington (vegan)</li>
                  <li>- Roast potatoes (vegan)</li>
                  <li>- Dauphinois potatoes</li>
                  <li>- Roasted root vegetables</li>
                  <li>- Mixed greens</li>
                </ul>
              </p>
              <p>
                Then, we'll have a dessert table for the evening after the speeches:
                <ul>
                  <li>- Selection of brownies</li>
                  <li>- Orange and passion fruit posset</li>
                  <li>
                    - Something which isn't strawberries and cream, because the museum won't let us have anything red
                  </li>
                </ul>
              </p>
            </Question>
            <Question question="Will there be a wedding cake?">
              <p>
                We've decided not to have a wedding cake. Instead, we're going to have a dessert buffet on the Saturday,
                with a range of different options for people to snack out throughout the evening.
              </p>
              <p>We're also going to be ordering something special for the Friday night!</p>
            </Question>
          </Card>
          <Card title="Travel" collapsible>
            <Question question="Where can I park near the museum?">
              <p>
                The museum itself doesn't have a car park. Their website recommends you park at the Westgate Center, or
                use the street parking on Mansfield Road, Keble Road and Blackhall Road.
              </p>
              <p>
                Farndon Road is another option- it's about a 15 minute walk from the museum, but has free parking after
                18:30 on a Saturday.
              </p>
              <motion.iframe
                layout
                title={'Parking near the museum'}
                src={'https://www.google.com/maps/d/u/1/embed?mid=1HHVLWvH6SqVtpicODULq86Qpkik93dI&ehbc=2E312F'}
                height="300"
                className="border rounded-sm"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></motion.iframe>
            </Question>
            <Question question="Can we walk between the museum and the hotel?">
              <p>
                It takes about 15 minutes to walk from the museum to the hotel, and it's all in safe, well lit areas.
              </p>
              <p>
                If people would prefer to take a taxi, we recommend using Royal Cars (01865 777 333). They also have an
                Uber-like app where you can pre-book travel.
              </p>
              <motion.iframe
                layout
                title={'15 Minute Walk to the Museum'}
                src={'https://www.google.com/maps/d/u/1/embed?mid=1NLtf9VrYCmtwxPrveTVc0znk_uTUOEw&ehbc=2E312F'}
                height="300"
                className="border rounded-sm"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></motion.iframe>
            </Question>
          </Card>
          <Card title="Jessie" collapsible secondary>
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
          </Card>
        </div>
      </div>
      <ImageLoader url={Jessie} />
    </PageContainer>
  );
};
