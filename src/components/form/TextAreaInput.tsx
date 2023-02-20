import { FC } from 'react';
import { merge } from '../../utils/merge';
import { BaseInput } from './BaseInput';
import { InputProps } from './form.types';

export const TextAreaInput: FC<InputProps<string>> = ({ value, onChange, placeholder, className, ...props }) => {
  return (
    <BaseInput {...props}>
      <textarea
        className={merge(className, 'border w-[400px] p-2 h-[100px]')}
        value={value}
        onChange={e => onChange(e.target.value)}
      ></textarea>
    </BaseInput>
  );
};
