import React, { createContext, useCallback, useState } from 'react';
import Notification from './toast';

interface NotificationContextType {
  notifications: NotifyData[];
  addNotification: (type: string, message: string, duration?: number) => void;
  removeNotification: (id: number) => void;
}

export const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

type NotifyData = {
  id: number;
  type: string;
  message: string;
};

type NotifyState = NotifyData[];

const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<NotifyState>([]);

  const addNotification = useCallback((type: string, message: string, duration = 3000) => {
    const id = Date.now();
    setNotifications((prev: NotifyState) => [...prev, { id, type, message }]);

    if (duration > 0) {
      setTimeout(() => {
        removeNotification(id);
      }, duration);
    }
  }, []);

  const removeNotification = useCallback((id: number) => {
    setNotifications((prev: NotifyState) => prev.filter(notif => notif.id !== id));
  }, []);

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, removeNotification }}>
      {children}
      <div className="fixed top-6 z-50 flex flex-col gap-2 w-full">
        {notifications.map(({ id, type, message }) => (
          <Notification
            key={id}
            type={type}
            message={message}
            onClose={() => removeNotification(id)}
            className="animate-slide-in"
          />
        ))}
      </div>
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
