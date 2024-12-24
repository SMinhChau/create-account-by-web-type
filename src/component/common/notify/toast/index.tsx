import React from 'react';
import { ToastTypes } from '@/utils/common';
import { PropsTypeNotify } from '@/utils/content';
import './toast.css';

const IconsNotify = {
  success: 'images/notify/success.svg',
  error: 'images/notify/error.svg',
  warning: 'images/notify/warning.svg',
};

const IconByType = (type: string) => {
  switch (type) {
    case ToastTypes.success: {
      return IconsNotify.success;
    }
    case ToastTypes.error: {
      return IconsNotify.error;
    }
    case ToastTypes.warning: {
      return IconsNotify.warning;
    }
    default: {
      return IconsNotify.success;
    }
  }
};

interface Props extends PropsTypeNotify {
  onClose?: () => void;
  className?: string;
}
const Notification: React.FC<Props> = ({
  type = ToastTypes.success,
  message,
  className = '',
  onClose,
}: Props) => {
  const backGroundColor = (type: string) => {
    let bg = 'bg-bg_normal';
    if (type == ToastTypes.success) {
      bg = 'bg-success_color';
    }
    if (type == ToastTypes.error) {
      bg = 'bg-error_color';
    }
    if (type == ToastTypes.warning) {
      bg = 'bg-warning_color';
    }
    return bg;
  };

  const ToastContent = () => {
    return (
      <div
        id={`toast-${type}`}
        className={`${className} 
        absolute right-3 
        grid grid-flow-col
         items-center w-100% max-w-xs min-h-[60px] mb-4 gap-2 px-4 py-2
        rounded-lg shadow 
        border-2 ${backGroundColor(type)} border-blue_border`}
        role="alert"
      >
        <div
          className="flex items-center justify-center flex-shrink-0 w-8 h-8
          text-green-500 bg-green-100 rounded-lg"
        >
          <img src={IconByType(type)} alt={`icon-${type}`} />
        </div>

        <div className="text-sm font-normal">{message}</div>

        <button type="button" className="button-close w-6 h-6 max-w-6" onClick={onClose}>
          <img src="icons/close.svg" alt="icon-close" className="w-full h-full" />
        </button>
      </div>
    );
  };

  return <ToastContent />;
};

export default Notification;
