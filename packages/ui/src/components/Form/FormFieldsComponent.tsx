import type Types from '@douglasneuroinformatics/form-types';
import type { PartialFormDataType } from '@douglasneuroinformatics/form-types';

import { DynamicField } from './DynamicField';
import { StaticField } from './StaticField';

import type { FormErrors } from './types';

export type FormFieldsComponentProps<T extends Types.FormDataType> = {
  errors: FormErrors<T>;
  fields: Types.FormFields<T>;
  setErrors: React.Dispatch<React.SetStateAction<FormErrors<T>>>;
  setValues: React.Dispatch<React.SetStateAction<PartialFormDataType<T>>>;
  values: Types.PartialFormDataType<T>;
};

/** Renders an object containing key value pairs, where the value is a FormField of some kind */
export const FormFieldsComponent = <T extends Types.FormDataType>({
  fields,
  ...props
}: FormFieldsComponentProps<T>) => {
  return Object.keys(fields).map((name) => {
    const field = fields[name]!;
    if (field.kind === 'dynamic') {
      return <DynamicField {...props} field={field} key={name} name={name} />;
    }
    return <StaticField {...props} field={field} key={name} name={name} />;
  });
};
