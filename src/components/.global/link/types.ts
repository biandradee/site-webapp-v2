import type { ReactNode } from 'react';

export interface LinkProps {
  children?: ReactNode;
  tabIndex?: number;
  ariaDescribedBy?: string;

  color?: string;
  size?: number;
  paddingY?: number;
  paddingX?: number;

  width?: number;
  height?: number;

  isFirstLink?: boolean;
  isLastLink?: boolean;
  isActive?: boolean;
  isFooterLink?: boolean;

  to?: string;
  img?: boolean;

  role?: string;
  ariaLabel?: string;

  onClick?: () => void;
}
