import { useEffect, useRef } from 'react';

import { range } from '@douglasneuroinformatics/utils';
import { clsx } from 'clsx';

import { ScrollArea } from '../ScrollArea';

export type YearSelectorProps = {
  onSelection: (date: Date) => void;
  selected: Date;
};

export const YearSelector = (props: YearSelectorProps) => {
  const selectedRef = useRef<HTMLButtonElement>(null);
  const currentYear = new Date().getFullYear();
  const years = Array.from(range(currentYear - 100, currentYear + 8)).reverse();

  useEffect(() => {
    if (selectedRef.current) {
      selectedRef.current.scrollIntoView({ block: 'center' });
    }
  }, []);

  return (
    <ScrollArea className="w-56 h-56">
      <div className="text-sm grid grid-cols-3 gap-x-2 gap-y-1 text-muted-foreground">
        {years.map((year) => (
          <div className="flex h-7 items-center justify-center" key={year}>
            <button
              className={clsx(
                'h-full w-full rounded-md border dark:border-slate-700 shadow hover:bg-slate-200 dark:hover:bg-slate-700',
                {
                  'bg-slate-700 dark:bg-slate-600 text-white hover:bg-slate-600': year === props.selected.getFullYear()
                }
              )}
              ref={year === props.selected.getFullYear() ? selectedRef : null}
              tabIndex={-1}
              type="button"
              onClick={() => {
                props.onSelection(new Date(year, 0));
              }}
            >
              {year}
            </button>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};
