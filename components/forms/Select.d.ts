/**
 * Select — dropdown de seleção com as mesmas variantes de estado do Input.
 * ```jsx
 * <Select label="Tipo de Projeto" options={['R-16','R-1','PIS']} value={tipo} onChange={setTipo} />
 * <Select label="Padrão" options={[{value:'alto',label:'Alto'},{value:'medio',label:'Médio'}]} />
 * ```
 */
export interface SelectProps {
  label?: string;
  id?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options?: Array<string | { value: string; label: string }>;
  placeholder?: string;
  helperText?: string;
  errorText?: string;
  disabled?: boolean;
  required?: boolean;
  size?: 'sm' | 'md' | 'lg';
}
