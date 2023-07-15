import { FC } from 'react';
import { Card } from '../components/card/Card';
import { PageContainer } from '../components/PageContainer';
import { PageTitleCard } from '../components/PageTitleCard';
import NaisHouseLogo from '../images/NaisHouseLogo.png';

export const Gifts: FC = () => {
  return (
    <PageContainer pageTitle="Gifts">
      <div className="flex flex-col items-center gap-5 py-10">
        <PageTitleCard name="Gifts" className="md:hidden" />
        <div className="flex flex-col gap-10 md:gap-5 w-full">
          <Card title="Gift Registry">
            <p>
              Instead of a gift registry, we've decided to collect donations for Nai's House- a local mental health
              charity.
            </p>
            <div
              className="w-[250px] h-[100px] bg-no-repeat bg-contain bg-center mx-auto rounded-md"
              style={{ backgroundImage: `url(${NaisHouseLogo})` }}
            />
            <p>
              Nai’s House is a blended youth and wellbeing service that offers a new way to access and receive mental
              health support. Their approach is non-clinical and it has been developed from the view point of the
              service user. It is backed by research and incorporates many of the ideals that youth consultations and
              agencies have highlighted a need for. This means they can deliver a service that is flexible and informal
              in its approach.
            </p>
            <p>
              If you'd like to donate, you can do it through our{' '}
              <a className="underline text-blue-700" href="https://www.justgiving.com/page/donnaphilwedding">
                Just Giving
              </a>{' '}
              page, or by bringing cash to the event.
            </p>
            <p>
              Please don't feel any pressure to donate! We appreciate that travel and accommodation at a wedding is a
              big expense, and we're incredibly grateful that so many people are willing to come to Oxford to celebrate
              with us.
            </p>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
};
