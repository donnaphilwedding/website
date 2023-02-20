import { resolve } from 'path';
import { FC, useState } from 'react';
import { InfoSection } from '../../components/InfoSection';
import { PageContainer } from '../../components/PageContainer';
import { PageTitleCard } from '../../components/PageTitleCard';
import { FoodChoice, Responses } from '../../utils/rsvp.types';
import { submitRsvp } from '../../utils/submitResponse';

export const RSVP: FC = () => {
  const [response, setResponse] = useState<Responses>({});

  const submit = () => {
    const testResponses: Responses = {
      name: response.name,
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

  const setName = (name: string) => {
    setResponse({ ...response, name });
  }

  return (
    <PageContainer pageTitle="RSVP">
      <div className="flex flex-col items-center gap-5 py-10">
        <PageTitleCard name="RSVP" className="md:hidden" />
        <InfoSection>
          <input className="border-b" placeholder='Name' value={response.name} onChange={e => setName(e.target.value)} ></input>
          <button className="bg-primary text-white rounded-md w-40" onClick={submit}>
            Try a submit
          </button>
        </InfoSection>
      </div>
    </PageContainer>
  );
};
