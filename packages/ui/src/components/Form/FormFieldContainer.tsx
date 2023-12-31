import React from 'react';

import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

import { PopoverIcon } from '../PopoverIcon/PopoverIcon';
import { FormErrorMessage } from './FormErrorMessage';

export type FormFieldContainerProps = {
  children: React.ReactNode;
  description?: string;
  error?: string;
};

export const FormFieldContainer = ({ children, description, error }: FormFieldContainerProps) => {
  return (
    <div className="my-8">
      <div className="relative my-1 flex w-full">
        <div className="flex flex-grow flex-col">{children}</div>
        {description && (
          <div className="flex items-center justify-center">
            <PopoverIcon icon={QuestionMarkCircleIcon} position="right" text={description} />
          </div>
        )}
      </div>
      {error && <FormErrorMessage message={error} />}
    </div>
  );
};
