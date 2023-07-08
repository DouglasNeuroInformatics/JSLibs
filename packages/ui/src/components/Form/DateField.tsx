'use client';

import React, { useEffect, useState } from 'react';

import { DateFormField } from '@douglasneuroinformatics/form-types';
import { toBasicISOString } from '@douglasneuroinformatics/utils';
import { Transition } from '@headlessui/react';
import { clsx } from 'clsx';

import { DatePicker } from '../DatePicker';

import { FormFieldContainer } from './FormFieldContainer';
import { BaseFieldProps } from './types';

export type DateFieldProps = BaseFieldProps<string | null> & DateFormField;

export const DateField = ({ description, name, label, error, value, setValue }: DateFieldProps) => {
  const [inputFocused, setInputFocused] = useState(false);
  const [mouseInDatePicker, setMouseInDatePicker] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    setShowDatePicker(inputFocused || mouseInDatePicker);
  }, [inputFocused, mouseInDatePicker]);

  const handleChange = (value: string) => {
    setValue(value);
  };

  const handleDatePickerSelection = (date: Date) => {
    handleChange(toBasicISOString(date));
    setShowDatePicker(false);
  };

  const isFloatingLabel = showDatePicker || value;

  return (
    <FormFieldContainer description={description} error={error}>
      <input
        autoComplete="off"
        className="field-input"
        value={value ?? ''}
        onBlur={() => setInputFocused(false)}
        onChange={(event) => handleChange(event.target.value)}
        onFocus={() => setInputFocused(true)}
      />
      <label
        className={clsx('field-label-floating', {
          'field-label-floating--active': isFloatingLabel
        })}
        htmlFor={name}
      >
        {label}
      </label>
      <Transition
        className="relative z-10"
        enter="transition-opacity duration-100"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        show={showDatePicker}
      >
        <div className="absolute">
          <DatePicker
            onMouseEnter={() => setMouseInDatePicker(true)}
            onMouseLeave={() => setMouseInDatePicker(false)}
            onSelection={handleDatePickerSelection}
          />
        </div>
      </Transition>
    </FormFieldContainer>
  );
};
