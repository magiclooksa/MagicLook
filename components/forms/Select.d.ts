/** Native select styled like Input. */
export interface SelectProps { label?: string; hint?: string; options: Array<string | { value: string; label: string }>; value?: string; onChange?: (v: string) => void; disabled?: boolean; }
export function Select(props: SelectProps): JSX.Element;
