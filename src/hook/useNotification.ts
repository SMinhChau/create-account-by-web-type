import { useContext } from 'react';
import { NotificationContext } from '@/component/common/notify';

const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    return null;
  }

  return {
    // Show success
    success: (message: string, duration?: number) => {
      context.addNotification('success', message, duration);
    },
    // Show error
    error: (message: string, duration?: number) => {
      context.addNotification('error', message, duration);
    },
    // Show warning
    warning: (message: string, duration?: number) => {
      context.addNotification('warning', message, duration);
    },
    // Remove specific
    remove: (id: number) => {
      context.removeNotification(id);
    },
    // Get all current
    notifications: context.notifications,
  };
};

export default useNotification;
