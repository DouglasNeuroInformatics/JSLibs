'use client';

import type { BinaryFormField } from '@douglasneuroinformatics/form-types';
import { RadioGroup, Switch } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';

import { useFormField } from '../../hooks/useFormField';
import { FormFieldContainer } from './FormFieldContainer';
import { type BaseFieldComponentProps } from './types';

type BinaryFieldProps = BaseFieldComponentProps & BinaryFormField;

type InnerProps = Pick<BinaryFieldProps, 'label' | 'name'> & {
  setValue: (value: boolean | null) => void;
  value: boolean | null;
};

const Checkbox = (props: InnerProps) => (
  <>
    <label className="field-label" htmlFor={props.name}>
      {props.label}
    </label>
    <div className="field-input-base">
      <Switch
        checked={Boolean(props.value)}
        className="flex h-6 w-6 items-center justify-center bg-white ring-1 ring-slate-200 hover:bg-slate-50 hover:shadow-xl dark:bg-slate-800 dark:ring-slate-500 dark:hover:bg-slate-700 rounded"
        onChange={props.setValue}
      >
        <CheckIcon className="ui-checked:visible invisible p-0.5 text-slate-600 dark:text-slate-300" />
      </Switch>
    </div>
  </>
);

const RadioOption = ({ label, value }: { label?: string; value: false | true }) => {
  const { t } = useTranslation();
  return (
    <RadioGroup.Option className="flex items-center text-slate-600 dark:text-slate-300" value={value}>
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white ring-1 ring-slate-200 hover:bg-slate-50 hover:shadow-xl dark:bg-slate-800 dark:ring-slate-500 dark:hover:bg-slate-700">
        <CheckIcon className="duration-400 ui-checked:opacity-100 p-0.5 opacity-0 transition-opacity ease-in-out" />
      </div>
      <span className="ms-2">{label ?? t(`form.radio.labels.${value}`)}</span>
    </RadioGroup.Option>
  );
};

const Radio = (props: InnerProps & { options?: { f: string; t: string } }) => {
  return (
    <RadioGroup value={props.value} onChange={props.setValue}>
      <RadioGroup.Label className="field-label">{props.label}</RadioGroup.Label>
      <div className="my-4 flex flex-col gap-5">
        <RadioOption label={props.options?.t} value={true} />
        <RadioOption label={props.options?.f} value={false} />
      </div>
    </RadioGroup>
  );
};

const BinaryField = ({ description, path, variant, ...props }: BinaryFieldProps) => {
  const { error, setValue, value } = useFormField<boolean>(path);
  return (
    <FormFieldContainer description={description} error={error}>
      {variant === 'checkbox' && <Checkbox {...props} setValue={setValue} value={value} />}
      {variant === 'radio' && <Radio {...props} setValue={setValue} value={value} />}
    </FormFieldContainer>
  );
};

export { BinaryField, type BinaryFieldProps };
