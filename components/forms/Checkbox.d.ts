/**
 * Checkbox — caixa de seleção com suporte a estado indeterminate.
 * ```jsx
 * <Checkbox label="Aceito os termos" checked={agreed} onChange={e => setAgreed(e.target.checked)} />
 * <Checkbox label="Selecionar todos" indeterminate checked={false} />
 * ```
 */
export interface CheckboxProps {
  label?: React.ReactNode;
  checked: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  indeterminate?: boolean;
  helperText?: string;
}
