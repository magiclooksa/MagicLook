import * as React from 'react';
/**
 * Pill button. Ochre primary is the single 10% accent — one per view.
 * @startingPoint section="Core" subtitle="Buttons in all variants" viewport="700x260"
 */
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'inverse';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  type?: 'button' | 'submit';
  fullWidth?: boolean;
  style?: React.CSSProperties;
}
export function Button(props: ButtonProps): JSX.Element;
