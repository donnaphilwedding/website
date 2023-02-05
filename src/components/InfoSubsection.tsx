import { FC, HTMLAttributes } from 'react';
import { merge } from '../utils/merge';

interface InfoSubSectionProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export const InfoSubSection: FC<InfoSubSectionProps> = ({ title, children, className }) => {
  return (
    <div>
      <p className="font-bold text-lg">{title}</p>
      <div className={merge("flex flex-col gap-3", className)}>{children}</div>
    </div>
  );
};
