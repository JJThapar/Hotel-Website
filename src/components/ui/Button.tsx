import Link from "next/link";

type Variant = "filled" | "outline" | "ghost";

interface Props {
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
}

const base =
  "inline-flex items-center gap-2 font-sans text-label-md uppercase tracking-[0.15em] transition-all duration-400 ease-luxury cursor-pointer select-none";

const variants: Record<Variant, string> = {
  filled:
    "bg-gold-500 text-ivory-100 px-8 py-3.5 hover:bg-gold-600 hover:shadow-luxury",
  outline:
    "border border-gold-500 text-gold-500 px-8 py-3.5 hover:bg-gold-500 hover:text-ivory-100",
  ghost:
    "text-ivory-100 border border-ivory-100/40 px-8 py-3.5 hover:border-ivory-100 hover:bg-ivory-100/10",
};

export default function Button({
  href,
  onClick,
  variant = "filled",
  children,
  className = "",
  type = "button",
}: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
