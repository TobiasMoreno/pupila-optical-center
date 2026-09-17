import type { Metadata } from "next";
import { Suspense } from "react";
import { ProductCatalog } from "@/components/catalog/ProductCatalog";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Catálogo",
  description: "Explorá anteojos de receta y de sol. Filtrá por marca, estilo, material y color, y consultá disponibilidad.",
};

function CatalogSkeleton() {
  return (
    <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
      <div className="hidden space-y-5 lg:block">{Array.from({ length: 6 }, (_, index) => <div key={index} className="h-16 animate-pulse rounded-xl bg-[var(--surface-muted)]" />)}</div>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">{Array.from({ length: 6 }, (_, index) => <div key={index}><div className="aspect-[4/3] animate-pulse rounded-[1.6rem] bg-[var(--surface-muted)]" /><div className="mt-4 h-6 w-2/3 animate-pulse rounded bg-[var(--surface-muted)]" /></div>)}</div>
    </div>
  );
}

export default function CatalogPage() {
  return (
    <>
      <header className="border-b border-[var(--line)] bg-[var(--surface)]">
        <Container className="py-16 sm:py-24">
          <p className="eyebrow">La colección</p>
          <div className="mt-5 grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <h1 className="font-display text-6xl leading-[0.9] tracking-[-0.055em] sm:text-7xl lg:text-8xl">Nuestro catálogo</h1>
            <p className="max-w-xl text-base leading-7 text-[var(--ink-soft)] sm:text-lg">Explorá nuestros modelos y consultanos disponibilidad, colores y opciones.</p>
          </div>
        </Container>
      </header>
      <Container className="py-12 sm:py-16">
        <Suspense fallback={<CatalogSkeleton />}>
          <ProductCatalog />
        </Suspense>
      </Container>
    </>
  );
}
