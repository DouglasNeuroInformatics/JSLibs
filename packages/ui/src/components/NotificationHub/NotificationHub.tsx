'use client';

import { XMarkIcon } from '@heroicons/react/24/solid';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { useNotificationsStore } from '../../stores/notifications-store';
import { withI18nProvider } from '../../utils/with-i18n-provider';
import { Card } from '../Card/Card';

import { NotificationIcon } from './NotificationIcon';

type NotificationHubProps = {
  /** The number of milliseconds before the notification is automatically cleared */
  timeout?: number;
};

const NotificationHubComponent = ({ timeout = 5000 }: NotificationHubProps) => {
  const { t } = useTranslation();
  const { notifications, dismissNotification } = useNotificationsStore();

  return (
    <div className="fixed bottom-0 z-50 w-full print:hidden">
      <AnimatePresence>
        {notifications.map((item) => (
          <motion.div
            animate={{ opacity: 1, height: 'auto' }}
            className="relative max-w-sm"
            exit={{ opacity: 0, height: 0 }}
            initial={{ opacity: 0, height: 0 }}
            key={item.id}
            transition={{ type: 'spring', bounce: 0.1 }}
          >
            <div className="w-full p-2">
              <Card className="w-full rounded-lg p-0">
                <div className="p-4">
                  <div className="mb-2 flex items-center">
                    <NotificationIcon type={item.type} />
                    <h5 className="ml-3 flex-grow font-medium text-slate-900 dark:text-slate-100">
                      {item.title ?? t(`notifications.types.${item.type}`)}
                    </h5>
                    <button
                      className="inline-flex rounded-md text-slate-400 hover:text-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-500 dark:focus:ring-sky-600"
                      type="button"
                      onClick={() => {
                        dismissNotification(item.id);
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon aria-hidden="true" className="h-5 w-5" />
                    </button>
                  </div>
                  <p className="my-2 text-slate-600 dark:text-slate-300">{item.message}</p>
                </div>
                <motion.div
                  animate={{ width: '100%' }}
                  className="h-1 bg-slate-500"
                  initial={{ width: '0%' }}
                  transition={{ duration: timeout / 1000, ease: 'linear' }}
                  onAnimationComplete={() => {
                    dismissNotification(item.id);
                  }}
                />
              </Card>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

const NotificationHub = withI18nProvider(NotificationHubComponent) as typeof NotificationHubComponent;

export { NotificationHub, type NotificationHubProps };
