interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Tag({ children, className = "" }: Props) {
  return (
    <span
      className={`inline-block font-sans text-label-sm uppercase tracking-[0.15em] text-stone-500 border border-stone-200 px-3 py-1 ${className}`}
    >
      {children}
    </span>
  );
}
