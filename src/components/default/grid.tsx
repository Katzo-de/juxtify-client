export default function Grid(
  { children, className}: { children: React.ReactNode; className: string | undefined},

) {
  return <div className={`grid h-full ${className}`}>{children}</div>;
}
