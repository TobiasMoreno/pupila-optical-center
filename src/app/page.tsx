import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Check, Eye, ScanEye, Sparkles } from "lucide-react";
import { ProductCard } from "@/components/catalog/ProductCard";
import { WhatsAppButton } from "@/components/contact/WhatsAppButton";
import { VisionHero } from "@/components/home/VisionHero";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { featuredProducts } from "@/data/products";

const categories = [
  { number: "01", title: "Receta", href: "/catalogo?categoria=receta", note: "Precisión para todos los días", color: "#69234f" },
  { number: "02", title: "Sol", href: "/catalogo?categoria=sol", note: "Protección con carácter", color: "#b9572f" },
  { number: "03", title: "Para vos", href: "/catalogo?genero=unisex", note: "Formas sin etiquetas", color: "#40584b" },
  { number: "04", title: "Peques", href: "/catalogo?genero=niños", note: "Livianos, flexibles, imparables", color: "#665b86" },
];

const steps = [
  { number: "01", title: "Te escuchamos", text: "Conocemos tu receta, tus hábitos y qué querés sentir cuando te mires al espejo." },
  { number: "02", title: "Probamos formas", text: "Buscamos proporción, comodidad y ese gesto que hace que un marco sea realmente tuyo." },
  { number: "03", title: "Afinamos la visión", text: "Elegimos los cristales indicados y cuidamos cada medida para que veas mejor de verdad." },
];

export default function HomePage() {
  return (
    <>
      <VisionHero />

      <section className="overflow-hidden py-24 sm:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--plum)]">
              <Eye className="h-5 w-5" /> Nuestra mirada
            </div>
            <div>
              <h2 className="max-w-5xl font-display text-[clamp(3.3rem,7vw,7rem)] leading-[0.9] tracking-[-0.055em]">
                No vendemos anteojos. <em className="font-normal text-[var(--plum)]">Encontramos el tuyo.</em>
              </h2>
              <div className="mt-10 grid gap-8 border-t border-[var(--line-strong)] pt-7 sm:grid-cols-2">
                <p className="max-w-md text-lg leading-8 text-[var(--ink-soft)]">
                  Elegimos cada marco por cómo se ve, cómo se siente y cómo acompaña tu forma de vivir.
                </p>
                <Link href="/nosotros" className="group flex w-fit items-center gap-3 self-start text-sm font-semibold">
                  Conocé nuestra forma de trabajar
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--ink)] transition group-hover:rotate-45 group-hover:bg-[var(--ink)] group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--surface)]">
        <Container className="py-20 sm:py-28">
          <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionTitle eyebrow="Colecciones" title="¿Qué querés ver hoy?" />
            <p className="max-w-sm text-sm leading-6 text-[var(--ink-soft)]">Pasá el cursor por cada colección. Cada forma abre una manera distinta de mirar.</p>
          </div>
          <div className="category-list border-t border-[var(--line-strong)]">
            {categories.map((category) => (
              <Link key={category.title} href={category.href} className="category-row" style={{ "--row-color": category.color } as CSSProperties}>
                <span className="category-row__number">{category.number}</span>
                <h3>{category.title}</h3>
                <p>{category.note}</p>
                <span className="category-row__arrow"><ArrowDownRight aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionTitle eyebrow="La edición Pupila" title="Marcos que dicen algo" description="Una selección corta y cuidada. Menos ruido, mejores elecciones." />
            <Link href="/catalogo" className="group flex w-fit items-center gap-2 text-sm font-semibold text-[var(--plum)]">
              Ver todo el catálogo <ArrowDownRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:translate-y-1" />
            </Link>
          </div>
          <div className="mt-12 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.slice(0, 3).map((product, index) => <ProductCard key={product.id} product={product} priority={index === 0} />)}
          </div>
        </Container>
      </section>

      <section className="bg-[#e4ddd4] py-20 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="eyebrow">La experiencia Pupila</p>
              <h2 className="mt-5 max-w-xl font-display text-5xl leading-[0.95] tracking-[-0.045em] sm:text-6xl">Elegir bien también puede sentirse simple.</h2>
              <div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--ink-soft)]">
                <span className="flex items-center gap-2 rounded-full border border-[var(--line-strong)] px-4 py-2"><Check className="h-3.5 w-3.5" /> Atención personal</span>
                <span className="flex items-center gap-2 rounded-full border border-[var(--line-strong)] px-4 py-2"><Check className="h-3.5 w-3.5" /> Ajuste preciso</span>
              </div>
            </div>
            <ol className="border-t border-[var(--line-strong)]">
              {steps.map((step) => (
                <li key={step.number} className="group grid gap-4 border-b border-[var(--line-strong)] py-7 sm:grid-cols-[56px_0.65fr_1fr] sm:items-start">
                  <span className="text-xs font-semibold tracking-[0.16em] text-[var(--plum)]">{step.number}</span>
                  <h3 className="font-display text-3xl tracking-[-0.03em] transition duration-300 group-hover:translate-x-1">{step.title}</h3>
                  <p className="text-sm leading-6 text-[var(--ink-soft)]">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section className="bg-[#e4ddd4] px-3 pb-3 sm:px-6 sm:pb-6">
        <div className="noise relative overflow-hidden rounded-[2rem] bg-[var(--ink)] text-white">
          <ScanEye className="absolute -right-12 -top-16 h-80 w-80 text-white/[0.035] sm:h-[32rem] sm:w-[32rem]" strokeWidth={0.6} />
          <Container className="relative grid gap-10 py-16 sm:py-24 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--orange)]"><Sparkles className="h-4 w-4" /> Estamos para orientarte</div>
              <h2 className="mt-5 text-balance font-display text-5xl leading-[0.9] tracking-[-0.045em] sm:text-7xl lg:text-8xl">Tu próxima mirada puede empezar acá.</h2>
            </div>
            <div>
              <p className="mb-5 max-w-xs text-sm leading-6 text-white/60">Contanos qué buscás. Te ayudamos a filtrar opciones y encontrar un marco que te quede de verdad.</p>
              <WhatsAppButton message="Hola, necesito ayuda para elegir un marco." label="Hablar con un asesor" variant="light" className="shrink-0" />
            </div>
          </Container>
        </div>
      </section>
    </>
  );
}
