"use client";

import { useState } from "react";
import type { ProductColor } from "@/types/product";
import { cn } from "@/lib/utils";

export function ColorSelector({ colors }: { colors: ProductColor[] }) {
  const [selected, setSelected] = useState(colors[0]?.name);

  return (
    <div>
      <p className="text-sm text-[var(--ink-soft)]">
        Color <span className="font-semibold text-[var(--ink)]">{selected}</span>
      </p>
      <div className="mt-3 flex flex-wrap gap-3" role="radiogroup" aria-label="Colores disponibles">
        {colors.map((color) => (
          <button
            key={color.name}
            type="button"
            role="radio"
            aria-checked={selected === color.name}
            aria-label={color.name}
            onClick={() => setSelected(color.name)}
            className={cn(
              "relative h-9 w-9 rounded-full border-4 border-[var(--paper)] shadow-[0_0_0_1px_var(--line)] transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--plum)]",
              selected === color.name && "shadow-[0_0_0_2px_var(--plum)]",
            )}
            style={{ backgroundColor: color.hex ?? "#d7d2ca" }}
          />
        ))}
      </div>
    </div>
  );
}
