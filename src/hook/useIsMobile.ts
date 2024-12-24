import { useMemo } from 'react';
import { useWindowSize } from './useWindowSize';
import { SizesScreen } from '@/utils/common';

const MOBILE_BREAKPOINT = SizesScreen.md;

const useIsMobile = () => {
  const { width } = useWindowSize();

  const isMobile = useMemo(() => {
    return width < MOBILE_BREAKPOINT;
  }, [width]);

  return isMobile;
};

export { useIsMobile };
