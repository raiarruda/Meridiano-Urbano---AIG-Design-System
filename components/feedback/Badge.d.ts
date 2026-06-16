/**
 * Badge — tag de status em pill. Usada em tabelas e CRM para indicar estado de registros.
 * ```jsx
 * <Badge label="Ativo" variant="success" dot />
 * <Badge label="Inativo" variant="error" />
 * <Badge label="Configurado" variant="amber" />
 * <Badge label="Oficial" variant="info" />
 * <Badge label="Em Revisão" variant="alert" />
 * ```
 */
export interface BadgeProps {
  label: string;
  variant?: 'success' | 'error' | 'info' | 'alert' | 'navy' | 'amber' | 'neutral';
  size?: 'sm' | 'md';
  /** Mostra ponto colorido antes do label */
  dot?: boolean;
}
