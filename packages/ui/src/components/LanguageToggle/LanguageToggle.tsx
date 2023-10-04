import React from 'react';

import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { clsx } from 'clsx';
import { useTranslation } from 'react-i18next';

export type LanguageToggleProps<T extends string> = {
  dropdownDirection?: 'down' | 'up';
  options: T[];
};

export const LanguageToggle = <T extends string = string>({ dropdownDirection, options }: LanguageToggleProps<T>) => {
  const { i18n } = useTranslation();

  return (
    <Menu as="div" className="relative bg-inherit">
      <Menu.Button
        className="flex items-center justify-center rounded-md p-2 hover:backdrop-brightness-95 dark:hover:backdrop-brightness-150"
        type="button"
      >
        <span className="uppercase">{i18n.resolvedLanguage}</span>
        <ChevronDownIcon
          className={clsx('ml-1', { 'rotate-180': dropdownDirection === 'up' })}
          height={16}
          width={16}
        />
      </Menu.Button>
      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={clsx(
            'absolute flex min-w-full flex-col rounded-md bg-inherit bg-opacity-100 shadow-xl ring-1 ring-black ring-opacity-10',
            {
              'bottom-12': dropdownDirection === 'up',
              'right-0 mt-2 origin-right': dropdownDirection !== 'up'
            }
          )}
        >
          {options.map((lang) => (
            <Menu.Item
              as="button"
              className="p-2 uppercase first:rounded-t-md last:rounded-b-md hover:backdrop-brightness-95 dark:hover:backdrop-brightness-150"
              key={lang}
              type="button"
              onClick={() => {
                void i18n.changeLanguage(lang);
              }}
            >
              {lang}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
