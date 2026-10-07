/** Ochre checkbox with label. */
export interface CheckboxProps { label?: string; checked?: boolean; onChange?: (v: boolean) => void; disabled?: boolean; }
export function Checkbox(props: CheckboxProps): JSX.Element;
