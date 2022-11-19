import { FC, HTMLAttributes } from 'react';
import { merge } from '../utils/merge';

interface InfoSectionProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  secondary?: boolean;
}

export const InfoSection: FC<InfoSectionProps> = ({ title, secondary, children, className }) => {
  let cardClass = 'md:rounded-lg w-full py-3 px-3 md:px-5';
  if (secondary) {
    cardClass = merge(cardClass, 'bg-white');
  } else {
    cardClass = merge(cardClass, 'bg-primary text-white');
  }

  return (
    <div className={cardClass}>
      <p className="font-cormorantSc text-2xl text-center mb-2">{title}</p>
      <div className={merge("flex flex-col gap-5", className)}>{children}</div>
    </div>
  );
};
