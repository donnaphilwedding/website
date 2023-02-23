import { FC, useState } from 'react';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { PageContainer } from '../../components/PageContainer';
import { PageTitleCard } from '../../components/PageTitleCard';
import { Responses } from '../../utils/rsvp.types';
import { submitRsvp } from '../../utils/submitResponse';
import { BasicInfo } from './BasicInfo';
import { EventInfo } from './EventInfo';
import { FoodInfo } from './FoodInfo';

enum RsvpPage {
  GUEST,
  EVENT,
  FOOD,
  COMPLETE
}

export const RSVP: FC = () => {
  const [response, setResponse] = useState<Responses>({ name: '' });
  const [page, setPage] = useState<RsvpPage>(RsvpPage.GUEST);

  const onBack = () => {
    setPage(page - 1);
  };

  const onNext = () => {
    if (!response.attending || page === RsvpPage.COMPLETE - 1) {
      setPage(RsvpPage.COMPLETE);
      submitRsvp(response);
    } else {
      setPage(page + 1);
    }
  };

  const reset = () => {
    setPage(RsvpPage.GUEST);
    setResponse({ name: '' });
  };

  return (
    <PageContainer pageTitle="RSVP">
      <div className="flex flex-col items-center gap-5 py-10">
        <PageTitleCard name="RSVP" className="md:hidden" />
        {page === RsvpPage.GUEST && (
          <BasicInfo responses={response} setResponses={setResponse} onComplete={onNext} onBack={onBack} />
        )}
        {page === RsvpPage.EVENT && (
          <EventInfo responses={response} setResponses={setResponse} onComplete={onNext} onBack={onBack} />
        )}
        {page === RsvpPage.FOOD && (
          <FoodInfo responses={response} setResponses={setResponse} onComplete={onNext} onBack={onBack} />
        )}
        {page === RsvpPage.COMPLETE && (
          <Card>
            <div>Your RSVP has been submitted!</div>
            <Button className="w-72" onClick={reset}>RSVP for another person</Button>
          </Card>
        )}
      </div>
    </PageContainer>
  );
};
