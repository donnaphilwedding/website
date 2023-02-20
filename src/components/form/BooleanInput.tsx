import { FC } from 'react';
import { BaseInput } from './BaseInput';
import { InputProps } from './form.types';
import { RadioButton } from './RadioButton';

export const BooleanInput: FC<InputProps<boolean>> = ({ value, onChange, ...props }) => {
  return (
    <BaseInput {...props}>
      <RadioButton label="Yes" checked={!!value} onClick={() => onChange(true)} />
      <RadioButton label="No" checked={!value} onClick={() => onChange(false)} />
    </BaseInput>
  );
};
