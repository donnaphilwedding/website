import { FC } from 'react';
import { Button } from '../../components/Button';
import { CheckboxListInput } from '../../components/form/CheckboxListInput';
import { Choice } from '../../components/form/form.types';
import { Card } from '../../components/card/Card';
import { EventDay } from '../../utils/rsvp.types';
import { FormCardProps } from './rsvpForm.types';
import { Link } from 'react-router-dom';

const checkboxChoices: Choice<EventDay>[] = [
  {
    label: 'Friday 15th September, 19:00: Cocktails at The House',
    value: EventDay.FRIDAY
  },
  {
    label: 'Saturday 16th September, 18:30: Reception at the Natural History Museum',
    value: EventDay.SATURDAY
  },
  {
    label: 'Sunday 17th September, 13:00-ish: Something fun in Oxford',
    value: EventDay.SUNDAY
  }
];

export const EventInfo: FC<FormCardProps> = ({ responses, setResponses, onComplete, onBack }) => {
  const setEvents = (events: EventDay[]) => {
    setResponses({ ...responses, events });
  };

  return (
    <Card title="Event Details">
      <p>
        We're holding three events across the weekend. The Saturday evening event is the biggest one. The Friday event
        is a welcome reception so we can greet people as they arrive. The Sunday event is a bit uncertain at the moment-
        what we're able to do on that day really depends on how many people are available.
      </p>
      <p>
        For more details on the events, see{' '}
        <Link className="underline" to="/schedule" target="_blank">
          here
        </Link>
        {'.'}
      </p>
      <CheckboxListInput
        name="Which events are you planning to attend?"
        description="This isn't a solid commitment- we're trying to gauge interest and maximum numbers for the three events."
        value={responses.events}
        onChange={setEvents}
        choices={checkboxChoices}
      />
      <div className="flex justify-between">
        <Button onClick={onBack}>Back</Button>
        <Button onClick={onComplete}>Next</Button>
      </div>
    </Card>
  );
};
