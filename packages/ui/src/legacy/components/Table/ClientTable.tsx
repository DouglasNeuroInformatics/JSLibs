import { useState } from 'react';

import { useTranslation } from 'react-i18next';

import { Table, type TableEntry, type TableProps } from './Table';

export const ClientTable = <T extends TableEntry>({ data, ...props }: TableProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage] = useState(10);
  const { t } = useTranslation();

  const pageCount = Math.ceil(data.length / entriesPerPage);

  const firstEntry = data.length === 0 ? 0 : (currentPage - 1) * entriesPerPage + 1;
  const lastEntry = Math.min(firstEntry + entriesPerPage - 1, data.length);
  const currentEntries = data.slice(firstEntry - 1, lastEntry);

  return (
    <div>
      <Table data={currentEntries} {...props} />
      <div className="py-3 px-1 flex items-center justify-between">
        <div className="hidden sm:block">
          <p className="text-sm font-medium text-muted-foreground">
            {t('table.pagination.info', {
              first: firstEntry,
              last: lastEntry,
              total: data.length
            })}
          </p>
        </div>
        <div className="flex-1 flex justify-between sm:justify-end">
          <button
            className="relative disabled:opacity-75 inline-flex items-center px-4 py-2 border border-slate-300 dark:border-slate-600 text-sm font-medium rounded-md text-muted-foreground bg-slate-50 dark:bg-slate-800"
            disabled={currentPage === 1}
            onClick={() => {
              setCurrentPage(currentPage - 1);
            }}
          >
            {t('table.pagination.previous')}
          </button>
          <button
            className="ml-3 disabled:opacity-75 relative inline-flex items-center px-4 py-2 border border-slate-300 dark:border-slate-600 text-sm font-medium rounded-md text-muted-foreground bg-slate-50 dark:bg-slate-800"
            disabled={currentPage === pageCount}
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}
          >
            {t('table.pagination.next')}
          </button>
        </div>
      </div>
    </div>
  );
};
