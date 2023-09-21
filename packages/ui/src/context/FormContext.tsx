'use client';

import React, { createContext } from 'react';

import { type FormInstrumentData } from '@douglasneuroinformatics/form-types';

import type { FormErrors, FormValues } from '../components/Form/types';

export type FormState<T extends FormInstrumentData = FormInstrumentData> = {
  errors: FormErrors<T>;
  values: FormValues<T>;
  setValues: React.Dispatch<React.SetStateAction<FormValues<T>>>;
};

export const FormContext = createContext<FormState>(null!);

export type FormProviderProps<T extends FormInstrumentData> = {
  children: React.ReactNode;
} & FormState<T>;

export const FormProvider = <T extends FormInstrumentData>({ children, ...props }: FormProviderProps<T>) => {
  return <FormContext.Provider value={props as FormState}>{children}</FormContext.Provider>;
};
