/**
 * IconButton — compact square button for icon-only actions. Uses Lucide icons.
 * ```jsx
 * <IconButton icon={<Edit size={16} />} label="Editar" variant="ghost" />
 * <IconButton icon={<Download size={16} />} label="Exportar" variant="outline" size="sm" />
 * ```
 */
export interface IconButtonProps {
  icon: React.ReactNode;
  label: string;
  variant?: 'primary' | 'accent' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
}
