import * as React from 'react';
/**
 * Magic Look bilingual signature (mark + النظرة الساحرة + MAGIC LOOK).
 * @startingPoint section="Brand" subtitle="Bilingual logo lockups" viewport="700x220"
 */
export interface LogoProps {
  /** horizontal = mark beside text; stacked = mark over text; mark = symbol only */
  layout?: 'horizontal' | 'stacked' | 'mark';
  /** Height of the mark in px */
  size?: number;
  /** light = ink text + ochre mark on ivory; dark = ivory on ink/ochre; mono = all ink */
  tone?: 'light' | 'dark' | 'mono';
  /** Side the mark sits on in the horizontal lockup (posters use end = right) */
  markPosition?: 'end' | 'start';
  style?: React.CSSProperties;
}
export function Logo(props: LogoProps): JSX.Element;
export interface LogoMarkProps { size?: number; color?: 'ochre' | 'ink' | 'ivory' | 'white' | string; style?: React.CSSProperties; }
export function LogoMark(props: LogoMarkProps): JSX.Element;
/** Arabic brand name "النظرة الساحرة" set in Noto Kufi Arabic Medium. size = font size in px. */
export interface ArabicWordmarkProps { size?: number; color?: 'ochre' | 'ink' | 'ivory' | 'white' | string; style?: React.CSSProperties; }
export function ArabicWordmark(props: ArabicWordmarkProps): JSX.Element;
