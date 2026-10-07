/** Text field with optional label, hint and error. RTL by default. */
export interface InputProps { label?: string; hint?: string; error?: string; placeholder?: string; value?: string; onChange?: (v: string) => void; type?: string; disabled?: boolean; dir?: 'rtl' | 'ltr'; }
export function Input(props: InputProps): JSX.Element;
