/**
 * Button — primary interactive element. Use for all user-initiated actions.
 * ```jsx
 * <Button variant="primary" size="md" onClick={handleSave}>Salvar configuração</Button>
 * <Button variant="accent" leftIcon={<Icon />}>Ver detalhes</Button>
 * <Button variant="secondary" disabled>Importar CSV</Button>
 * ```
 * @startingPoint section="Components" subtitle="Primary action button with 5 variants and 3 sizes" viewport="700x280"
 */
export interface ButtonProps {
  /** Visual style */
  variant?: 'primary' | 'accent' | 'secondary' | 'ghost' | 'danger';
  /** Size token */
  size?: 'sm' | 'md' | 'lg';
  /** Disables interaction and dims appearance */
  disabled?: boolean;
  /** Stretches to container width */
  fullWidth?: boolean;
  /** React node placed before label (use Lucide icon) */
  leftIcon?: React.ReactNode;
  /** React node placed after label (use Lucide icon) */
  rightIcon?: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
}
