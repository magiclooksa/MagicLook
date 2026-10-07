import * as React from 'react';
/** Circular icon-only button. Always pass a label. */
export interface IconButtonProps { children: React.ReactNode; label: string; variant?: 'outline' | 'solid' | 'ghost'; size?: number; onClick?: () => void; disabled?: boolean; }
export function IconButton(props: IconButtonProps): JSX.Element;
