import { ChevronDownIcon } from '@radix-ui/react-icons';

import { Select } from '../Select';

export type SelectOption = {
  key: string;
  label: string;
};

export type SelectDropdownProps<T extends SelectOption> = {
  className?: string;
  options: T[];
  selected: T[];
  setSelected: (selected: T[]) => void;
  title: string;
};

export const SelectDropdown = <T extends SelectOption>({
  options,
  selected,
  setSelected,
  title
}: SelectDropdownProps<T>) => {
  const selectedKeys = selected.map((option) => option.key);
  return (
    <Select
      value=""
      onValueChange={(key) => {
        const index = selectedKeys.indexOf(key);
        if (index > -1) {
          setSelected(selected.toSpliced(index, 1));
        } else {
          const option = options.find((option) => option.key === key)!;
          setSelected([...selected, option]);
        }
      }}
    >
      <Select.Trigger>
        {title}
        <Select.Icon asChild>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Content>
        <Select.Group>
          {options.map((option) => (
            <Select.Item isChecked={selectedKeys.includes(option.key)} key={option.key} value={option.key}>
              {option.label}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select>
  );
};
