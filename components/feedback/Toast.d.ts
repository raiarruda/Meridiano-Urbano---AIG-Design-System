/**
 * Toast — notificação temporária de confirmação, erro ou atualização. Aparece no canto inferior direito.
 * ```jsx
 * <Toast message="Valor salvo com sucesso" subtitle="CubValue R-16 Médio atualizado" variant="success" />
 * <Toast message="Campo inválido" subtitle="Verifique os dados e tente novamente" variant="error" />
 * <Toast message="Registro atualizado" variant="info" />
 * ```
 */
export interface ToastProps {
  message: string;
  subtitle?: string;
  variant?: 'success' | 'error' | 'info' | 'alert';
  onDismiss?: () => void;
}
