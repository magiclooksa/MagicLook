import * as React from 'react';
/** Small pill label for material, status or collection. */
export interface BadgeProps { tone?: 'ochre' | 'soft' | 'ink' | 'outline'; children: React.ReactNode; }
export function Badge(props: BadgeProps): JSX.Element;
