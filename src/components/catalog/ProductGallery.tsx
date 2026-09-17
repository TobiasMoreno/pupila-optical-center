"use client";

import dynamic from "next/dynamic";
import { Images, Rotate3D } from "lucide-react";
import { useState } from "react";
import type { Product } from "@/types/product";
import { cn } from "@/lib/utils";
import { ProductImage } from "./ProductImage";

const Product360Viewer = dynamic(() => import("./Product360Viewer"), {
  ssr: false,
  loading: () => <div className="aspect-[4/3] animate-pulse rounded-[1.8rem] bg-[var(--surface-muted)]" />,
});

export function ProductGallery({ product }: { product: Product }) {
  const [tab, setTab] = useState<"photos" | "360">("photos");
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div>
      <div className="mb-4 flex gap-2" role="tablist" aria-label="Vistas del producto">
        <button type="button" role="tab" aria-selected={tab === "photos"} onClick={() => setTab("photos")} className={cn("flex h-11 items-center gap-2 rounded-full border px-4 text-sm font-semibold transition", tab === "photos" ? "border-[var(--ink)] bg-[var(--ink)] text-white" : "border-[var(--line)] bg-white text-[var(--ink-soft)] hover:border-[var(--ink)]")}><Images className="h-4 w-4" /> Fotos</button>
        <button type="button" role="tab" aria-selected={tab === "360"} onClick={() => setTab("360")} className={cn("flex h-11 items-center gap-2 rounded-full border px-4 text-sm font-semibold transition", tab === "360" ? "border-[var(--ink)] bg-[var(--ink)] text-white" : "border-[var(--line)] bg-white text-[var(--ink-soft)] hover:border-[var(--ink)]")}><Rotate3D className="h-4 w-4" /> Vista 360°</button>
      </div>

      {tab === "photos" ? (
        <>
          <ProductImage src={product.images[selectedImage]} alt={`${product.brand} ${product.model}, vista ${selectedImage + 1}`} model={product.model} priority sizes="(max-width: 1024px) 100vw, 55vw" className="rounded-[1.8rem]" />
          <div className="mt-3 grid grid-cols-3 gap-3">
            {product.images.map((image, index) => (
              <button key={image} type="button" onClick={() => setSelectedImage(index)} className={cn("overflow-hidden rounded-xl border-2 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--plum)]", selectedImage === index ? "border-[var(--plum)]" : "border-transparent opacity-70 hover:opacity-100")} aria-label={`Ver imagen ${index + 1}`}>
                <ProductImage src={image} alt="" model={product.model} sizes="180px" className="rounded-[0.6rem]" />
              </button>
            ))}
          </div>
        </>
      ) : (
        <Product360Viewer frames={product.spin360?.frames ?? []} enabled={product.spin360?.enabled} alt={`${product.brand} ${product.model}`} />
      )}
    </div>
  );
}
