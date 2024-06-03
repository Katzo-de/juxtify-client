export default function Container( { children, className}: { children: React.ReactNode; className: string | undefined},) {
    return (
      <div className={`pl-2 p-[3px] ${className}`}>
        {children}
      </div>
    );
  }
  