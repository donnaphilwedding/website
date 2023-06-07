import { FC } from 'react';
import { Card } from '../components/card/Card';
import { PageContainer } from '../components/PageContainer';
import { PageTitleCard } from '../components/PageTitleCard';

export const Gifts: FC = () => {
  return (
    <PageContainer pageTitle="Gifts">
      <div className="flex flex-col items-center gap-5 py-10">
        <PageTitleCard name="Gifts" className="md:hidden" />
        <div className="flex flex-col gap-10 md:gap-5 w-full">
          <Card title="Gift Registry">
            <p>
              Instead of a gift registry, we've decided to collect donations for a local charity. We'll be starting an
              online collection page once we work out how to do that- cash donations will also be accepted at the
              Saturday evening event.
            </p>
            <p>
              Please don't feel any pressure to donate. We appreciate that travel and accommodation at a wedding is a
              big expense, and we're incredibly grateful that so many people are willing to come to Oxford to celebrate
              with us.
            </p>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
};
