import { FC, HTMLAttributes } from 'react';
import Break from '../images/break.svg';

export const FlowerBorderLogo: FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  return (
    <div className={className}>
      <div
        className="h-12 w-full"
        style={{ backgroundImage: `url(${Break})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
      ></div>
      <div className="flex flex-col items-center h-full w-full">
        <p className="font-calligraffitti text-2xl mb-[-6px]">{'Donna & Phil'}</p>
        <p className="font-cormorantSc text-gray-500">{'2023/09/16'}</p>
      </div>
      <div
        className="h-12 w-full"
        style={{ backgroundImage: `url(${Break})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
      ></div>
    </div>
  );
};
