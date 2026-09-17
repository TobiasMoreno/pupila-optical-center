import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/types/product";
import { formatCategory } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { ProductImage } from "./ProductImage";

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  return (
    <article className="group min-w-0">
      <Link href={`/catalogo/${product.slug}`} className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--plum)]" aria-label={`Ver detalles de ${product.brand} ${product.model}`}>
        <div className="relative overflow-hidden rounded-[1.6rem]">
          <ProductImage
            src={product.images[0]}
            alt={`${product.brand} ${product.model}, vista principal`}
            model={product.model}
            priority={priority}
            className="transition duration-700 group-hover:scale-[1.025]"
          />
          {product.available && <Badge className="absolute left-4 top-4 bg-white/90">Disponible</Badge>}
          <span className="absolute bottom-4 right-4 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-white text-[var(--ink)] opacity-0 shadow-lg transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
        <div className="px-1 pb-3 pt-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink-soft)]">{product.brand}</p>
              <h3 className="mt-1 font-display text-2xl tracking-[-0.03em]">{product.model}</h3>
            </div>
            <div className="flex -space-x-1 pt-1" aria-label={`${product.colors.length} colores disponibles`}>
              {product.colors.slice(0, 4).map((color) => (
                <span key={color.name} className="h-5 w-5 rounded-full border-2 border-[var(--paper)] shadow-[0_0_0_1px_rgba(0,0,0,.08)]" style={{ backgroundColor: color.hex ?? "#ccc" }} title={color.name} />
              ))}
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between border-t border-[var(--line)] pt-3 text-sm">
            <span className="text-[var(--ink-soft)]">{formatCategory(product.category)}</span>
            <span className="font-semibold text-[var(--plum)]">Ver detalles</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
