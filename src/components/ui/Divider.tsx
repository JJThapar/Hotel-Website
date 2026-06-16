interface Props {
  light?: boolean;
  className?: string;
}

export default function Divider({ light, className = "" }: Props) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className={`h-px flex-1 ${light ? "bg-ivory-100/20" : "bg-stone-200"}`} />
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
        <path
          d="M8 0 C8 0 6 4 2 8 C6 12 8 16 8 16 C8 16 10 12 14 8 C10 4 8 0 8 0Z"
          fill={light ? "rgba(250,248,240,0.3)" : "#b8962a"}
        />
      </svg>
      <div className={`h-px flex-1 ${light ? "bg-ivory-100/20" : "bg-stone-200"}`} />
    </div>
  );
}
