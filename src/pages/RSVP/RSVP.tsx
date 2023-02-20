import { FC } from 'react';
import { InfoSection } from '../../components/InfoSection';
import { PageContainer } from '../../components/PageContainer';
import { PageTitleCard } from '../../components/PageTitleCard';

enum FoodChoice {
  BAD,
  OKAY,
  GOOD
}

interface Responses {
  name: string;
  attending: boolean;
  events?: {
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
  };
  children?: string;
  dietaryRequirements?: string;
  foodChoices?: {
    chicken: FoodChoice;
    beef: FoodChoice;
    veggie: FoodChoice;
    potatoes?: number;
  };
}

export const RSVP: FC = () => {
  const foodChoiceToFormResponse = (choice: FoodChoice) => {
    switch (choice) {
      case FoodChoice.BAD:
        return 'Bad';
      case FoodChoice.OKAY:
        return 'Okay';
      case FoodChoice.GOOD:
        return 'Good';
    }
  };

  const buildResponseLink = (responses: Responses) => {
    let link =
      'https://docs.google.com/forms/d/e/1FAIpQLScJ1ygljcuiSWRAfqEVAZ1PiZbKjdU02M931comreYvbffOhw/formResponse?&submit=Submit?usp=pp_url&';

    link += `entry.738609481=${responses.name}`;

    if (!responses.attending) {
      link += '&entry.1732408748=No';
      return link;
    } else {
      link += `&entry.1732408748=Yes`;
    }

    if (responses.events?.friday) {
      link += `&entry.2094926627=Friday`;
    }

    if (responses.events?.saturday) {
      link += `&entry.2094926627=Saturday`;
    }

    if (responses.events?.sunday) {
      link += `&entry.2094926627=Sunday`;
    }

    if (responses.dietaryRequirements) {
      link += `&entry.1200732236=${responses.dietaryRequirements}`;
    }

    if (responses.foodChoices) {
      link += `&entry.1606828388=${foodChoiceToFormResponse(responses.foodChoices.beef)}`;
      link += `&entry.326445905=${foodChoiceToFormResponse(responses.foodChoices.chicken)}`;
      link += `&entry.233524952=${foodChoiceToFormResponse(responses.foodChoices.veggie)}`;
      if (responses.foodChoices.potatoes) {
        link += `&entry.803370769=${responses.foodChoices.potatoes}`;
      }
    }

    if (responses.children) {
      link += `&entry.383962526=${responses.children}`;
    }

    return link;
  };

  const submit = () => {
    const testLink =
      'https://docs.google.com/forms/d/e/1FAIpQLScJ1ygljcuiSWRAfqEVAZ1PiZbKjdU02M931comreYvbffOhw/formResponse?&submit=Submit?usp=pp_url&entry.738609481=Test+Name&entry.1732408748=Yes&entry.2094926627=Friday&entry.2094926627=Saturday&entry.2094926627=Sunday&entry.1200732236=Dietary+requirements+are+long&entry.1606828388=Good&entry.326445905=Okay&entry.233524952=Bad&entry.803370769=7&entry.383962526=Children';

    const testResponses: Responses = {
      name: 'Phil Form',
      attending: true,
      foodChoices: {
        beef: 0,
        chicken: 1,
        veggie: 2,
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

    window.open(buildResponseLink(testResponses), '_blank');
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
