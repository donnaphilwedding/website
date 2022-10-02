import { FC } from 'react';
import { Header } from '../components/Header';
import { PageContainer } from '../components/PageContainer';

export const Home: FC = () => {
  return (
    <div>
      <Header />
      <PageContainer>
        <div className="py-10 flex flex-col items-center">
          <div className="bg-white p-5 rounded-lg w-72">
            <div className="flex flex-col items-center">
              <p className="font-calligraffitti text-4xl mb-[-6px]">{'Donna & Phil'}</p>
              <p className="font-cormorantSc text-2xl text-gray-500">{'2023/09/16'}</p>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
};
