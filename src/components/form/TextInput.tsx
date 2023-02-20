import { FC } from 'react';
import { merge } from '../../utils/merge';
import { BaseInput } from './BaseInput';
import { InputProps } from './form.types';

export const TextInput: FC<InputProps<string>> = ({ value, onChange, placeholder, className, ...props }) => {
  return (
    <BaseInput {...props}>
      <input
        className={merge(className, 'border-b')}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
      ></input>
    </BaseInput>
  );
};
