import { EventDay, FoodChoice, Responses } from './rsvp.types';

export const foodChoiceToFormResponse = (choice: FoodChoice) => {
  switch (choice) {
    case FoodChoice.BAD:
      return 'Bad';
    case FoodChoice.OKAY:
      return 'Okay';
    case FoodChoice.GOOD:
      return 'Good';
  }
};

export const buildResponseLink = (responses: Responses) => {
  const formId = '1FAIpQLScJ1ygljcuiSWRAfqEVAZ1PiZbKjdU02M931comreYvbffOhw';
  let link = `https://docs.google.com/forms/d/e/${formId}/formResponse?&submit=Submit?usp=pp_url&`;

  link += `entry.738609481=${responses.name}`;

  if (!responses.attending) {
    link += '&entry.1732408748=No';
    return link;
  } else {
    link += `&entry.1732408748=Yes`;
  }

  if (responses.events?.includes(EventDay.FRIDAY)) {
    link += `&entry.2094926627=Friday`;
  }

  if (responses.events?.includes(EventDay.SATURDAY)) {
    link += `&entry.2094926627=Saturday`;
  }

  if (responses.events?.includes(EventDay.SUNDAY)) {
    link += `&entry.2094926627=Sunday`;
  }

  if (responses.dietaryRequirements) {
    link += `&entry.1200732236=${responses.dietaryRequirements}`;
  }

  if (responses.beef) {
    link += `&entry.1606828388=${foodChoiceToFormResponse(responses.beef)}`;
  }
  if (responses.chicken) {
    link += `&entry.326445905=${foodChoiceToFormResponse(responses.chicken)}`;
  }
  if (responses.veggie) {
    link += `&entry.233524952=${foodChoiceToFormResponse(responses.veggie)}`;
  }
  if (responses.beef) {
    if (responses.potatoes) {
      link += `&entry.803370769=${responses.potatoes}`;
    }
  }

  if (responses.children) {
    link += `&entry.383962526=${responses.children}`;
  }

  return link;
};

export const submitRsvp = (responses: Responses) => {
  window.open(buildResponseLink(responses), '_blank');
};
