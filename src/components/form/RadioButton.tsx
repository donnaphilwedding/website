import { FC } from 'react';

interface Props {
  label: string;
  onClick: () => void;
  checked: boolean;
}

export const RadioButton: FC<Props> = ({ label, checked, onClick }) => {
  return (
    <div className="flex gap-2 items-center">
      <input type="radio" checked={checked} onChange={onClick} className="accent-secondary" />
      <div>{label}</div>
    </div>
  );
};
