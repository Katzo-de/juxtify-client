export default function ContentArea({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string | undefined;
}) {
  return <div className={`flex border-2 rounded-xl border-tertiary h-full ${className}`}>{children}</div>;
}
