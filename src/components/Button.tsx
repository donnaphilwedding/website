import { FC, ReactNode } from 'react';

interface Props {
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
}

export const Button: FC<Props> = ({ className, onClick, children }) => {
  return (
    <button className="bg-primary text-white rounded-md w-40 p-1" onClick={onClick}>
      {children}
    </button>
  );
};
