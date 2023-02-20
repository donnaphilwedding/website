import { FC, useState } from 'react';
import { BooleanInput } from '../../components/form/BooleanInput';
import { TextInput } from '../../components/form/TextInput';
import { InfoSection } from '../../components/InfoSection';
import { FormCardProps } from './rsvpForm.types';

export const BasicInfo: FC<FormCardProps> = ({ responses, setResponses, cardComplete }) => {
  const setName = (name: string) => {
    setNameError("");
    setResponses({ ...responses, name });
  };

  const setAttending = (attending: boolean) => {
    setAttendingError("");
    setResponses({ ...responses, attending });
  };

  const [nameError, setNameError] = useState<string>("");
  const [attendingError, setAttendingError] = useState<string>("");

  const validateAndComplete = () => {
    if (!responses.name) {
      setNameError("You must provide at least one name.")
    }

    if (responses.attending === undefined) {
      setAttendingError("You must say whether you are able to attend.")
    }

    if (responses.name && responses.attending !== undefined) {
      cardComplete();
    }
  }

  return (
        <InfoSection>
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
          <button className="bg-primary text-white w-40" onClick={validateAndComplete}>
            Next
          </button>
        </InfoSection>
  );
};
