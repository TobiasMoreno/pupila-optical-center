import Link from "next/link";

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-2.5" aria-label="Pupila Centro Óptico, ir al inicio">
      <svg className="h-7 w-10" viewBox="0 0 48 30" fill="none" aria-hidden="true">
        <path
          d="M2.5 16.2C8.2 7.7 14.6 4 23.8 4c9.3 0 15.7 3.7 21.7 12.2-6 6.7-12.5 9.7-21.7 9.7-9.1 0-15.6-3-21.3-9.7Z"
          stroke={light ? "#fff" : "var(--plum)"}
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <circle cx="24" cy="15" r="5.2" fill={light ? "#fff" : "var(--plum)"} />
        <circle cx="25.7" cy="13.5" r="1.6" fill={light ? "var(--plum)" : "white"} />
      </svg>
      <span className="leading-none">
        <span className={`block text-xl font-bold tracking-[0.08em] ${light ? "text-white" : "text-[var(--plum)]"}`}>
          PUPILA
        </span>
        <span className={`mt-1 block text-[0.52rem] font-semibold tracking-[0.22em] ${light ? "text-white/65" : "text-[var(--ink-soft)]"}`}>
          CENTRO ÓPTICO
        </span>
      </span>
    </Link>
  );
}
