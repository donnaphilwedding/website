import { FC } from 'react';
import { InfoSection } from '../components/InfoSection';
import { PageContainer } from '../components/PageContainer';
import { PageTitleCard } from '../components/PageTitleCard';
import { RecommendationSection } from '../components/RecommendationSection';

export const Recommendations: FC = () => {
  return (
    <PageContainer pageTitle="Recommendations">
      <div className="flex flex-col items-center gap-5 py-10">
        <PageTitleCard name="Recommendations" className="md:hidden" />
        <div className="flex flex-col gap-10 md:gap-5 w-full">
          <InfoSection title="Coffee Shops" collapsible>
            <RecommendationSection
              title="Knoops"
              mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.8524675455014!2d-1.258559484354357!3d51.754021279676415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c7fbe10d59ef%3A0xc38a836867b5c330!2sKnoops%20Chocolate!5e0!3m2!1sen!2suk!4v1676317014607!5m2!1sen!2suk"
            >
              Knoops is a hot chocolate place which opened in the last couple of years. There's a lot of different
              choices! Really good if it's a little bit cold outside.
            </RecommendationSection>
          </InfoSection>
        </div>
      </div>
    </PageContainer>
  );
};
