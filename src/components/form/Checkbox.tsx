import { FC } from 'react';

interface Props {
  label: string;
  onClick: () => void;
  checked: boolean;
}

export const Checkbox: FC<Props> = ({ label, checked, onClick }) => {
  return (
    <div className="flex gap-2 items-center">
      <input type="checkbox" checked={checked} onChange={onClick} />
      <div>{label}</div>
    </div>
  );
};
