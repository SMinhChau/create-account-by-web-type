import { createContext } from 'react';

export type OverFlowType = {
  isOverFlow: boolean;
  setIsOverFlow?: (isOverFlow: boolean) => void;
};
export const ThemeContextOverFlow = createContext<OverFlowType>({
  isOverFlow: false,
});
