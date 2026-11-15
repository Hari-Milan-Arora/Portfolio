type StatusIndicatorProps = {
  children: React.ReactNode;
  className?: string;
};

export function StatusIndicator({
  children,
  className = "",
}: StatusIndicatorProps) {
  return (
    <span className={`status-indicator ${className}`.trim()}>{children}</span>
  );
}
