import { ChevronDownIcon } from '@/icons';

import { Select } from '../Select';

type DropdownOptions = Record<string, string> | readonly string[];

type DropdownOptionKey<T> = T extends readonly string[]
  ? T[number]
  : T extends Record<string, string>
    ? Extract<keyof T, string>
    : never;

export type DropdownProps<T extends DropdownOptions> = {
  className?: string;

  /** Callback function invoked when user clicks an option */
  onSelection: (option: DropdownOptionKey<T>) => void;

  /** Either a list of options for the dropdown, or an object with options mapped to custom labels  */
  options: T;

  /** The text content for the dropdown toggle */
  title: string;
};

// eslint-disable-next-line react/function-component-definition
export function Dropdown<const T extends DropdownOptions>({ onSelection, options, title }: DropdownProps<T>) {
  const optionKeys: readonly string[] = options instanceof Array ? options : Object.keys(options);
  return (
    <Select value="" onValueChange={onSelection}>
      <Select.Trigger>
        {title}
        <Select.Icon asChild>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Content>
        <Select.Group>
          {optionKeys.map((option) => (
            <Select.Item key={option} value={option}>
              {Array.isArray(options) ? option : (options[option as keyof T] as string)}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select>
  );
}
