/** Ochre rule over a row of features separated by ochre dots, as on product posters. */
export interface FeatureLineProps { items: string[]; size?: number; rule?: boolean; color?: string; }
export function FeatureLine(props: FeatureLineProps): JSX.Element;
