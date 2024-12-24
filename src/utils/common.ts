import { format } from 'date-fns';

export const SizesScreen = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export const formatDateTime = (date: string, type?: string) => {
  return format(date, type ?? 'yyyy/MM/dd');
};

export const ToastTypes = {
  success: 'success',
  error: 'error',
  warning: 'warning',
};
