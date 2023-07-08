'use client';

import React from 'react';

import { OptionsFormField } from '@douglasneuroinformatics/form-types';
import { Listbox, Transition } from '@headlessui/react';
import { clsx } from 'clsx';

import { FormFieldContainer } from './FormFieldContainer';
import { BaseFieldProps } from './types';

export type OptionsFieldProps<T extends string = string> = BaseFieldProps<T | null> & OptionsFormField<T>;

export const OptionsField = <T extends string = string>({
  description,
  name,
  label,
  options,
  error,
  value,
  setValue
}: OptionsFieldProps<T>) => {
  return (
    <FormFieldContainer description={description} error={error}>
      <Listbox as={React.Fragment} name={name} value={value} onChange={setValue}>
        {({ open }) => (
          <>
            <Listbox.Button className="field-input capitalize">{value ? options[value] : ''}</Listbox.Button>
            <Listbox.Label
              className={clsx('field-label-floating', {
                'field-label-floating--active': value || open
              })}
            >
              {label}
            </Listbox.Label>
            <Transition
              as="div"
              className="relative inline-block"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="scrollbar-hidden absolute z-10 mt-1 max-h-80 w-full overflow-scroll rounded-lg border border-slate-300 bg-slate-100 shadow-lg dark:border-slate-600 dark:bg-slate-800">
                {Object.keys(options).map((option) => (
                  <Listbox.Option
                    className="p-2 capitalize hover:bg-slate-200 dark:hover:bg-slate-700"
                    key={option}
                    value={option}
                  >
                    {options[option as T]}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </>
        )}
      </Listbox>
    </FormFieldContainer>
  );
};
