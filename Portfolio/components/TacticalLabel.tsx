type TacticalLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export function TacticalLabel({ children, className = "" }: TacticalLabelProps) {
  return <span className={`tactical-label ${className}`.trim()}>{children}</span>;
}
