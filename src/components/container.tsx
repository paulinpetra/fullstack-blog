export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1100px] mx-auto bg-slate-900 min-h-screen flex flex-col borde-l border-r">
      {children}
    </div>
  );
}
