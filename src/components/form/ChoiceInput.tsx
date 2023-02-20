import { FC } from 'react';
import { merge } from '../../utils/merge';
import { BaseInput } from './BaseInput';
import { InputProps } from './form.types';

export interface Choice<T> {
  label: string;
  value: T;
}

interface Props<T> extends InputProps<T> {
  choices: Choice<T>[];
}

export const ChoiceInput: FC<Props<number>> = ({
  value,
  onChange,
  choices,
  ...props
}) => {
  return (
    <BaseInput {...props}>
      {choices.map(choice => (
        <input type="radio" checked={value === choice.value} />
      ))}
    </BaseInput>
  );
};
