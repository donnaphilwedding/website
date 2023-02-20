import { FC } from 'react';
import { BaseInput } from './BaseInput';
import { Checkbox } from './Checkbox';
import { Choice, InputProps } from './form.types';

interface Props<T> extends InputProps<T[]> {
  choices: Choice<T>[];
}

export const CheckboxListInput: FC<Props<any>> = ({ value, onChange, choices, ...props }) => {
  const onCheck = (checkedVal: any) => {
    const newValue: any[] = value ? [...value] : [];
    const index = newValue.findIndex(val => val === checkedVal);

    if (index >= 0) {
      newValue.splice(index, 1);
    } else {
      newValue.push(checkedVal);
    }

    onChange(newValue);
  }

  return (
    <BaseInput {...props}>
      {choices.map(choice => (
        <Checkbox label={choice.label} checked={!!value?.includes(choice.value)} onClick={() => onCheck(choice.value)}/>
      ))}
    </BaseInput>
  );
};
