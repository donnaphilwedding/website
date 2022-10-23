import { FC, HTMLAttributes } from 'react';
import Break from '../images/break.svg';
import { merge } from '../utils/merge';

interface PageTitleCardProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
}

export const PageTitleCard: FC<PageTitleCardProps> = ({ name, className }) => {
  return (
    <div className={merge(className, "bg-white rounded-lg w-72 p-1 flex flex-col items-center")}>
      <div
        className="h-8 w-40"
        style={{ backgroundImage: `url(${Break})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
      ></div>
      <p className="font-cormorantSc text-xl -m-2">{name}</p>
      <div
        className="h-8 w-40 rotate-180"
        style={{ backgroundImage: `url(${Break})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
      ></div>
    </div>
  );
};
