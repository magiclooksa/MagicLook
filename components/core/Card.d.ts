import * as React from 'react';
/** Calm, flat content field (no shadow). The poster "clear field" sitting on the pattern. */
export interface CardProps { tone?: 'ivory' | 'white' | 'ink' | 'ochre'; radius?: 'sm' | 'md' | 'lg' | 'xl'; padding?: number | string; children?: React.ReactNode; style?: React.CSSProperties; }
export function Card(props: CardProps): JSX.Element;
