import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[var(--line)] bg-white/80 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-[var(--ink-soft)]",
        className,
      )}
      {...props}
    />
  );
}
