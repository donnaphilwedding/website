import { FC } from 'react';
import { merge } from '../../utils/merge';
import { BaseInputProps } from './form.types';


export const BaseInput: FC<BaseInputProps> = ({
  name,
  description,
  required,
  errorMessage,
  containerClassName,
  children
}) => {
  return (
    <div className={merge(containerClassName)}>
      {name && <div className="text-lg font-semibold">{name}</div>}
      {description && <div className="mb-2">{description}</div>}
      {children}
      {errorMessage && <div className="text-red-500">{errorMessage}</div>}
    </div>
  );
};
