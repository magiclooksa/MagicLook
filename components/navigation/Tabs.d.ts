/** Underline tabs with ochre indicator. */
export interface TabsProps { tabs: Array<string | { value: string; label: string }>; value?: string; onChange?: (v: string) => void; }
export function Tabs(props: TabsProps): JSX.Element;
