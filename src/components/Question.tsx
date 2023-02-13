import { FC, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  question: string;
}

export const Question: FC<Props> = ({ question, children }) => {
  return (
    <div className="flex flex-col gap-3">
      <p className='font-bold'>{question}</p>
      {children}
    </div>
  );
};
