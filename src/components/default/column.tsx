export default function Column({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex flex-column items-center w-full h-full">
        {children}
      </div>
    );
  }
  