import * as React from 'react';
/** Modal on an ink scrim; ivory sheet, 24px radius. */
export interface DialogProps { open?: boolean; title?: string; children?: React.ReactNode; actions?: React.ReactNode; onClose?: () => void; /** render without scrim (for previews) */ inline?: boolean; }
export function Dialog(props: DialogProps): JSX.Element | null;
