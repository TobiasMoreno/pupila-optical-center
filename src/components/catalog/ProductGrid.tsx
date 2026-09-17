import { SearchX } from "lucide-react";
import type { Product } from "@/types/product";
import { ProductCard } from "./ProductCard";

export function ProductGrid({ products }: { products: Product[] }) {
  if (!products.length) {
    return (
      <div className="flex min-h-80 flex-col items-center justify-center rounded-[2rem] border border-dashed border-[var(--line-strong)] bg-white/45 px-6 text-center">
        <SearchX className="h-9 w-9 text-[var(--plum)]" aria-hidden="true" />
        <h2 className="mt-4 font-display text-3xl">No encontramos modelos</h2>
        <p className="mt-2 max-w-sm text-sm leading-6 text-[var(--ink-soft)]">Probá cambiando los filtros o limpiá la búsqueda para volver a ver el catálogo completo.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product, index) => <ProductCard key={product.id} product={product} priority={index < 3} />)}
    </div>
  );
}
