import { FC, useState } from 'react';
import { Button } from '../../components/Button';
import { BooleanInput } from '../../components/form/BooleanInput';
import { TextInput } from '../../components/form/TextInput';
import { InfoSection } from '../../components/InfoSection';
import { FormCardProps } from './rsvpForm.types';

export const BasicInfo: FC<FormCardProps> = ({ responses, setResponses, onComplete, onBack }) => {
  const setName = (name: string) => {
    setNameError('');
    setResponses({ ...responses, name });
  };

  const setAttending = (attending: boolean) => {
    setAttendingError('');
    setResponses({ ...responses, attending });
  };

  const [nameError, setNameError] = useState<string>('');
  const [attendingError, setAttendingError] = useState<string>('');

  const validateAndComplete = () => {
    if (!responses.name) {
      setNameError('You must provide at least one name.');
    }

    if (responses.attending === undefined) {
      setAttendingError('You must say whether you are able to attend.');
    }

    if (responses.name && responses.attending !== undefined) {
      onComplete();
    }
  };

  return (
    <InfoSection title="Guest Details">
      <div>
        Note: The online RSVP is currently being developed. If you reply now, there's a chance you'll need to do it
        again if the page isn't working properly.
      </div>
      <TextInput
        name="Name of Guest"
        className="w-full"
        value={responses.name}
        onChange={setName}
        description="We'll use this as a reference for the seating plan, so please include surnames!"
        errorMessage={nameError}
      />
      <BooleanInput
        name="Are you able to attend the wedding?"
        value={responses.attending}
        onChange={setAttending}
        errorMessage={attendingError}
      />
      <div className="flex justify-end">
        <Button onClick={validateAndComplete}>{responses.attending === false ? 'Submit response' : 'Next'}</Button>
      </div>
    </InfoSection>
  );
};
