import { PropsWithChildren } from "react";

export interface BaseInputProps extends PropsWithChildren {
  name?: string;
  description?: string;
  required?: boolean;
  errorMessage?: string;
  containerClassName?: string;
}

export interface InputProps<T> extends Exclude<BaseInputProps, 'children'> {
  value?: T,
  onChange: (newValue: T) => void,
  placeholder?: string;
  className?: string;
}