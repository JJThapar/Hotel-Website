interface Props {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}

export default function SectionLabel({ children, light, className = "" }: Props) {
  return (
    <span
      className={`font-sans text-label-md uppercase tracking-[0.18em] ${
        light ? "text-ivory-300" : "text-gold-500"
      } ${className}`}
    >
      {children}
    </span>
  );
}
