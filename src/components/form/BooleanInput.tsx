import { FC } from 'react';
import { BaseInput } from './BaseInput';
import { InputProps } from './form.types';
import { RadioButton } from './RadioButton';

export const BooleanInput: FC<InputProps<boolean>> = ({ value, onChange, ...props }) => {
  return (
    <BaseInput {...props}>
      <RadioButton label="Yes" checked={value === true} onClick={() => onChange(true)} />
      <RadioButton label="No" checked={value === false} onClick={() => onChange(false)} />
    </BaseInput>
  );
};
