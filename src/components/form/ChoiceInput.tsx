import { FC } from 'react';
import { BaseInput } from './BaseInput';
import { Choice, InputProps } from './form.types';
import { RadioButton } from './RadioButton';

interface Props<T> extends InputProps<T> {
  choices: Choice<T>[];
  grid?: boolean;
}

export const ChoiceInput: FC<Props<any>> = ({ value, onChange, choices, grid, ...props }) => {
  return (
    <BaseInput {...props}>
      <div className={`grid grid-cols-1 ${grid ? 'sm:grid-cols-3' : ''}`}>
        {choices.map(choice => (
          <RadioButton
            label={choice.label}
            onClick={() => onChange(choice.value)}
            checked={value === choice.value}
            key={choice.label}
          />
        ))}
      </div>
    </BaseInput>
  );
};
