import type { ReactNode } from 'react';

export interface TextProps
  extends React.AllHTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  width?: number;
  color?: string;
  size?: number | string;
  weight?: number;
  lineHeight?: number;
  margin?: number;
  marginBlock?: number;
  marginInline?: number | string;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
}
