import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ChevronRight, CircleHelp, Ruler } from "lucide-react";
import { ProductGallery } from "@/components/catalog/ProductGallery";
import { ProductCard } from "@/components/catalog/ProductCard";
import { ColorSelector } from "@/components/catalog/ColorSelector";
import { WhatsAppButton } from "@/components/contact/WhatsAppButton";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { getProductBySlug, products } from "@/data/products";
import { createProductWhatsAppMessage } from "@/lib/whatsapp";
import { formatCategory, formatGender } from "@/lib/utils";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Modelo no encontrado" };
  return {
    title: `${product.brand} ${product.model}`,
    description: product.description,
    openGraph: { title: `${product.brand} ${product.model}`, description: product.description },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const { lensWidth, bridgeWidth, templeLength } = product.measurements;
  const measures = [lensWidth, bridgeWidth, templeLength].every(Boolean)
    ? `${lensWidth} □ ${bridgeWidth} — ${templeLength} mm`
    : "Consultar medidas";
  const related = products.filter((item) => item.id !== product.id && (item.category === product.category || item.gender === product.gender)).slice(0, 3);

  return (
    <>
      <Container className="py-5 sm:py-7">
        <nav className="flex flex-wrap items-center gap-1.5 text-xs text-[var(--ink-soft)]" aria-label="Migas de pan">
          <Link href="/" className="hover:text-[var(--plum)]">Inicio</Link><ChevronRight className="h-3 w-3" />
          <Link href="/catalogo" className="hover:text-[var(--plum)]">Catálogo</Link><ChevronRight className="h-3 w-3" />
          <span className="font-semibold text-[var(--ink)]">{product.brand} {product.model}</span>
        </nav>
      </Container>

      <Container className="grid gap-10 pb-20 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16 lg:pb-28">
        <ProductGallery product={product} />
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>{formatCategory(product.category)}</Badge>
            <Badge>{formatGender(product.gender)}</Badge>
          </div>
          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--plum)]">{product.brand}</p>
          <h1 className="mt-2 font-display text-6xl leading-none tracking-[-0.055em] sm:text-7xl">{product.model}</h1>
          <p className="mt-6 text-base leading-7 text-[var(--ink-soft)]">{product.description}</p>

          <div className="mt-8 border-y border-[var(--line)] py-6">
            <ColorSelector colors={product.colors} />
          </div>

          <dl className="grid grid-cols-2 gap-x-5 gap-y-6 border-b border-[var(--line)] py-6 text-sm">
            <div><dt className="text-[var(--ink-soft)]">Material</dt><dd className="mt-1 font-semibold">{product.material}</dd></div>
            <div><dt className="text-[var(--ink-soft)]">Disponibilidad</dt><dd className="mt-1 flex items-center gap-1.5 font-semibold">{product.available && <Check className="h-4 w-4 text-[#277251]" />}{product.available ? "Disponible" : "Consultar"}</dd></div>
            <div className="col-span-2"><dt className="flex items-center gap-1.5 text-[var(--ink-soft)]"><Ruler className="h-4 w-4" /> Medidas</dt><dd className="mt-1 font-semibold tracking-[0.04em]">{measures}</dd></div>
          </dl>

          <WhatsAppButton message={createProductWhatsAppMessage(product.brand, product.model)} label={`Consultar por ${product.model}`} className="mt-7 w-full sm:w-auto" />
          <p className="mt-4 flex items-start gap-2 text-xs leading-5 text-[var(--ink-soft)]"><CircleHelp className="mt-0.5 h-4 w-4 shrink-0" /> Te confirmamos disponibilidad, colores y opciones de cristales por WhatsApp.</p>
        </div>
      </Container>

      <section className="border-t border-[var(--line)] bg-[var(--surface)] py-20 sm:py-24">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div><p className="eyebrow">También te pueden gustar</p><h2 className="mt-3 font-display text-4xl tracking-[-0.04em] sm:text-5xl">Seguí explorando</h2></div>
            <Link href="/catalogo" className="hidden text-sm font-semibold text-[var(--plum)] hover:underline sm:block">Ver todo</Link>
          </div>
          <div className="mt-10 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">{related.map((item) => <ProductCard key={item.id} product={item} />)}</div>
        </Container>
      </section>
    </>
  );
}
