import { FC } from 'react';
import { Header } from '../components/Header';
import {PageContainer} from '../components/PageContainer';

export const Home: FC = () => {
  return (
    <div>
      <Header />
      <PageContainer>
        <div className="w-full bg-primary">
            Home
        </div>
      </PageContainer>
    </div>
  );
};
