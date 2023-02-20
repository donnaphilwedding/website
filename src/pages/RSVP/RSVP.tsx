import { FC, useState } from 'react';
import { PageContainer } from '../../components/PageContainer';
import { PageTitleCard } from '../../components/PageTitleCard';
import { FoodChoice, Responses } from '../../utils/rsvp.types';
import { submitRsvp } from '../../utils/submitResponse';
import { BasicInfo } from './BasicInfo';
import { EventInfo } from './EventInfo';
import { FoodInfo } from './FoodInfo';

export const RSVP: FC = () => {
  const [response, setResponse] = useState<Responses>({});

  const submit = () => {
    const testResponses: Responses = {
      name: response.name,
      attending: response.attending,
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

  const [showEventsStep, setShowEventsStep] = useState<boolean>(false);
  const [showFoodStep, setShowFoodStep] = useState<boolean>(false);

  return (
    <PageContainer pageTitle="RSVP">
      <div className="flex flex-col items-center gap-5 py-10">
        <PageTitleCard name="RSVP" className="md:hidden" />
        <BasicInfo responses={response} setResponses={setResponse} cardComplete={() => setShowEventsStep(true)} open={true} />
        <EventInfo responses={response} setResponses={setResponse} cardComplete={() => setShowFoodStep(true)} open={showEventsStep} />
        <FoodInfo responses={response} setResponses={setResponse} cardComplete={submit} open={showFoodStep} />
      </div>
    </PageContainer>
  );
};
