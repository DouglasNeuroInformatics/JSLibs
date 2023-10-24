'use client';

import { useEffect, useRef } from 'react';

import { range } from '@douglasneuroinformatics/utils';
import { clsx } from 'clsx';

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

  // height is to h-8 + gap-3 = 3rem -> 3rem x 7 = 21rem
  return (
    <div className="h grid w-72 grid-cols-3 gap-3 overflow-y-scroll text-sm" style={{ height: '21rem' }}>
      {years.map((year) => (
        <div className="flex h-9 items-center justify-center" key={year}>
          <button
            className={clsx(
              'h-full w-full rounded-lg border dark:border-slate-700 shadow hover:bg-slate-200 dark:hover:bg-slate-700',
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
  );
};
