import { FC } from 'react';
import { PageContainer } from '../components/PageContainer';
import Break from '../images/break.svg';
import AlexWedding from '../images/AlexWedding.jpg';
import { Link } from 'react-router-dom';

export const Home: FC = () => {
  return (
    <div>
      <PageContainer>
        <div className="py-10 flex flex-col items-center">
          <div className="bg-white p-5 rounded-lg w-5/6 md:w-1/2 mb-10">
            <div className="w-full flex flex-col items-center">
              <div
                className="h-12 w-48"
                style={{ backgroundImage: `url(${Break})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
              ></div>
              <p className="font-calligraffitti text-4xl mb-[-6px]">{'Donna & Phil'}</p>
              <p className="font-cormorantSc text-2xl text-gray-500">{'2023/09/16'}</p>
              <div
                className="h-12 w-48"
                style={{ backgroundImage: `url(${Break})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
              ></div>
            </div>
          </div>
          <div className="w-full sm:w-5/6 rounded-none sm:rounded-lg bg-primary text-white p-5 text-center flex flex-col gap-5 sm:mb-10">
            <p>We’re excited to be holding our wedding in Oxford in September 2023.</p>
            <p>
              We’ll be organising several events across the weekend, so we can spend as much time as possible with all
              our guests.
            </p>
            <p>
              Click{' '}
              <Link className="underline" to="/schedule">
                here
              </Link>{' '}
              to see the schedule.
            </p>
          </div>
          <div
            className="w-full sm:w-5/6 h-[30vh] sm:h-[50vh] rounded-none sm:rounded-lg bg-cover bg-center sm:bg-bottom"
            style={{ backgroundImage: `url(${AlexWedding})` }}
          />
        </div>
      </PageContainer>
    </div>
  );
};
