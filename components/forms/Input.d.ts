/**
 * Input — campo de texto padrão com label, helper text e estados de validação.
 * ```jsx
 * <Input label="Valor Configurado (R$/m²)" prefix="R$" value={val} onChange={setVal} />
 * <Input label="Nome do Logradouro" errorText="Campo obrigatório" required />
 * <Input label="CEP" suffix="🔍" successText="Endereço encontrado" />
 * ```
 */
export interface InputProps {
  label?: string;
  id?: string;
  type?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  helperText?: string;
  /** Shown in red, overrides helperText */
  errorText?: string;
  /** Shown in green */
  successText?: string;
  disabled?: boolean;
  required?: boolean;
  /** Left affix inside the border (e.g. "R$") */
  prefix?: React.ReactNode;
  /** Right affix inside the border */
  suffix?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}
