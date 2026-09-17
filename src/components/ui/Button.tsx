import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
  external?: boolean;
  showArrow?: boolean;
}

const styles = {
  primary:
    "bg-[var(--plum)] text-white border-[var(--plum)] hover:bg-[var(--plum-deep)] hover:border-[var(--plum-deep)]",
  secondary:
    "bg-transparent text-[var(--ink)] border-[var(--ink)] hover:bg-[var(--ink)] hover:text-white",
  ghost:
    "bg-white/70 text-[var(--ink)] border-[var(--line)] hover:border-[var(--plum)] hover:text-[var(--plum)]",
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
  external,
  showArrow = false,
  ...props
}: ButtonProps) {
  const shared = cn(
    "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-5 text-sm font-semibold tracking-[-0.01em] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--plum)] disabled:pointer-events-none disabled:opacity-60",
    styles[variant],
    className,
  );

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={shared}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {content}
      </Link>
    );
  }

  return (
    <button className={shared} {...props}>
      {content}
    </button>
  );
}
