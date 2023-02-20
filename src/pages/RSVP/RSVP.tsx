import { FC } from 'react';
import { InfoSection } from '../../components/InfoSection';
import { PageContainer } from '../../components/PageContainer';
import { PageTitleCard } from '../../components/PageTitleCard';
import { FoodChoice, Responses } from '../../utils/rsvp.types';
import { submitRsvp } from '../../utils/submitResponse';

export const RSVP: FC = () => {
  const submit = () => {
    const testResponses: Responses = {
      name: 'Phil Form',
      attending: true,
      foodChoices: {
        beef: FoodChoice.BAD,
        chicken: FoodChoice.OKAY,
        veggie: FoodChoice.GOOD,
        potatoes: 5
      },
      children: 'No children',
      dietaryRequirements: 'No dietary requirements',
      events: {
        friday: true,
        saturday: true,
        sunday: false
      }
    };

    submitRsvp(testResponses);
  };

  return (
    <PageContainer pageTitle="RSVP">
      <div className="flex flex-col items-center gap-5 py-10">
        <PageTitleCard name="RSVP" className="md:hidden" />
        <InfoSection>
          <button className="bg-primary text-white rounded-md w-40" onClick={submit}>
            Try a submit
          </button>
        </InfoSection>
      </div>
    </PageContainer>
  );
};
