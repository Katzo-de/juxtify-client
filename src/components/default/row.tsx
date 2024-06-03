

export default function Row({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-center w-full h-full">
      {children}
    </div>
  );
}
