import { FC, useState } from 'react';
import { Button } from '../../components/Button';
import { BooleanInput } from '../../components/form/BooleanInput';
import { TextInput } from '../../components/form/TextInput';
import { Card } from '../../components/card/Card';
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

  const setChildren = (children: string) => {
    setResponses({ ...responses, children });
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
    <Card title="Guest Details">
      <div>
        <b>Note: </b>The online RSVP is currently being developed. Please let Phil know after you've submitted, so he
        can check it went through!
      </div>
      <TextInput
        name="Name of guest(s)"
        className="w-full"
        value={responses.name}
        onChange={setName}
        description="You can also include your partner's name, but you'll only be able to enter one set of food choices. We'll use this as a reference for the seating plan, so please include surnames."
        errorMessage={nameError}
      />
      <TextInput
        name="Are you planning on bringing any children to the wedding?"
        description="Please include their names and ages."
        className="w-full"
        value={responses.children}
        onChange={setChildren}
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
    </Card>
  );
};
