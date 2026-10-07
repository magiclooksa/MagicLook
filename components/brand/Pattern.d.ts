import * as React from 'react';
/** Background surface with the identity's bespoke half-drop repeat ("The Bend" + "The Valley"). */
export interface PatternProps {
  /** Ground colour; pattern ink and default opacity follow (13% on ivory, 10% on ink) */
  ground?: 'ivory' | 'ink' | 'ochre' | 'white';
  /** Cell size in px (uniform scale only) */
  scale?: number;
  /** Override pattern opacity 0–1 */
  opacity?: number;
  radius?: number | string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Pattern(props: PatternProps): JSX.Element;
