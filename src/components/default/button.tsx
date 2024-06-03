export default function Button(
    { children, className}: { children: React.ReactNode; className: string | undefined},
  
  ) {
    return <button className={`flex space-x-2 items-center ${className}`}>{children}</button>;
  }
  