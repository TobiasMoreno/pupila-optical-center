import Link from "next/link";
import { ArrowDownRight, Baby, CircleUserRound, Eye, Glasses, Sparkles, Sun, UsersRound } from "lucide-react";
import { ProductCard } from "@/components/catalog/ProductCard";
import { WhatsAppButton } from "@/components/contact/WhatsAppButton";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { featuredProducts } from "@/data/products";

const categories = [
  { title: "Anteojos de receta", href: "/catalogo?categoria=receta", icon: Glasses, tone: "bg-[#eee2ea]" },
  { title: "Anteojos de sol", href: "/catalogo?categoria=sol", icon: Sun, tone: "bg-[#f5dfce]" },
  { title: "Hombre", href: "/catalogo?genero=hombre", icon: CircleUserRound, tone: "bg-[#e5e6e2]" },
  { title: "Mujer", href: "/catalogo?genero=mujer", icon: Sparkles, tone: "bg-[#ede3dc]" },
  { title: "Niños", href: "/catalogo?genero=niños", icon: Baby, tone: "bg-[#f3e8d2]" },
  { title: "Unisex", href: "/catalogo?genero=unisex", icon: UsersRound, tone: "bg-[#e0e5e0]" },
];

const steps = [
  { number: "01", title: "Explorá el catálogo", text: "Descubrí formas, materiales y colores pensados para distintas miradas." },
  { number: "02", title: "Elegí tu modelo", text: "Guardá el nombre del marco que te representa o pedinos una sugerencia." },
  { number: "03", title: "Escribinos", text: "Consultá disponibilidad y variantes por WhatsApp, sin compromiso." },
  { number: "04", title: "Te asesoramos", text: "Te acompañamos para encontrar el calce y los cristales indicados." },
];

export default function HomePage() {
  return (
    <>
      <section className="noise overflow-hidden border-b border-[var(--line)]">
        <Container className="grid min-h-[calc(100svh-77px)] items-center gap-10 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:py-10">
          <div className="relative z-10 max-w-2xl py-6 lg:py-16">
            <p className="eyebrow reveal">Óptica boutique · Córdoba</p>
            <h1 className="reveal reveal-delay-1 mt-5 text-balance font-display text-[clamp(3.4rem,8vw,7.7rem)] leading-[0.85] tracking-[-0.065em]">
              Encontrá el marco que mejor va <em className="font-normal text-[var(--plum)]">con vos</em>
            </h1>
            <p className="reveal reveal-delay-2 mt-7 max-w-xl text-base leading-7 text-[var(--ink-soft)] sm:text-lg">
              Explorá nuestra selección de anteojos de receta y de sol. Consultanos y te ayudamos a encontrar el indicado.
            </p>
            <div className="reveal reveal-delay-3 mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/catalogo" showArrow>Ver catálogo</Button>
              <WhatsAppButton message="Hola, me gustaría recibir asesoramiento para elegir un marco." label="Consultar por WhatsApp" variant="light" className="border border-[var(--line-strong)]" />
            </div>
          </div>

          <div className="relative min-h-[390px] lg:min-h-[650px]">
            <div className="absolute inset-[4%] rounded-[45%_45%_12%_12%/40%_40%_15%_15%] bg-[var(--plum)]" />
            <div className="absolute -right-16 top-8 h-48 w-48 rounded-full bg-[var(--orange)] lg:-right-24 lg:h-72 lg:w-72" />
            <div className="absolute bottom-3 left-0 right-[18%] top-[20%] overflow-hidden rounded-[8rem_1rem_8rem_1rem] bg-gradient-to-br from-[#ded5cf] via-[#f1e9e2] to-[#cbbcbc] shadow-[0_35px_80px_rgba(71,26,67,.22)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_28%,rgba(255,255,255,.9),transparent_32%)]" />
              <svg className="hero-glasses absolute left-1/2 top-1/2 w-[85%] -translate-x-1/2 -translate-y-1/2 text-[var(--plum-deep)]" viewBox="0 0 540 230" fill="none" aria-label="Ilustración de anteojos">
                <path d="M34 84c49-27 127-27 185 1l-11 76c-45 23-110 16-136-16-21-25-29-43-38-61Z" fill="rgba(255,255,255,.28)" stroke="currentColor" strokeWidth="10" />
                <path d="M506 84c-49-27-127-27-185 1l11 76c45 23 110 16 136-16 21-25 29-43 38-61Z" fill="rgba(255,255,255,.28)" stroke="currentColor" strokeWidth="10" />
                <path d="M219 90c30-21 72-21 102 0M34 85 2 65m504 20 32-20" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                <path d="M75 105c27-12 67-15 102-6M363 99c35-9 75-6 102 6" stroke="white" strokeOpacity=".7" strokeWidth="7" strokeLinecap="round" />
              </svg>
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-[var(--plum-deep)]">
                <div><p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em]">Selección Pupila</p><p className="mt-1 font-display text-2xl">Una forma de mirarte</p></div>
                <Eye className="h-7 w-7" />
              </div>
            </div>
            <div className="absolute right-0 top-[20%] rounded-full bg-white/90 px-4 py-3 text-xs font-semibold shadow-xl backdrop-blur-sm sm:px-5">Asesoramiento<br />personalizado</div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionTitle eyebrow="Encontrá tu estilo" title="Una colección para cada mirada" />
            <Link href="/catalogo" className="flex w-fit items-center gap-2 text-sm font-semibold text-[var(--plum)] hover:underline">Ver todo el catálogo <ArrowDownRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Link key={category.title} href={category.href} className={`${category.tone} group relative flex min-h-44 overflow-hidden rounded-[1.6rem] p-6 transition duration-500 hover:-translate-y-1`}>
                  <span className="absolute right-5 top-4 font-display text-5xl text-[var(--ink)]/8">0{index + 1}</span>
                  <div className="mt-auto">
                    <Icon className="mb-7 h-7 w-7 text-[var(--plum)] transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110" aria-hidden="true" />
                    <h3 className="font-display text-3xl tracking-[-0.035em]">{category.title}</h3>
                  </div>
                  <ArrowDownRight className="absolute bottom-6 right-6 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--surface)] py-20 sm:py-28">
        <Container>
          <SectionTitle eyebrow="Elegidos de la casa" title="Modelos destacados" description="Una selección de formas esenciales, materiales nobles y colores que se sienten propios." />
          <div className="mt-12 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.slice(0, 6).map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
          <div className="mt-12 text-center"><Button href="/catalogo" variant="secondary" showArrow>Explorar todos los modelos</Button></div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <SectionTitle eyebrow="Simple y cercano" title="Elegir bien también puede ser fácil" description="Te acompañamos en cada paso, desde la primera mirada hasta el ajuste final." />
            <ol className="border-t border-[var(--line-strong)]">
              {steps.map((step) => (
                <li key={step.number} className="group grid gap-3 border-b border-[var(--line)] py-6 sm:grid-cols-[64px_0.65fr_1fr] sm:items-start">
                  <span className="text-xs font-semibold tracking-[0.16em] text-[var(--plum)]">{step.number}</span>
                  <h3 className="font-display text-2xl tracking-[-0.025em] transition group-hover:translate-x-1">{step.title}</h3>
                  <p className="text-sm leading-6 text-[var(--ink-soft)]">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section className="px-3 pb-3 sm:px-6 sm:pb-6">
        <div className="noise relative overflow-hidden rounded-[2rem] bg-[var(--plum)] text-white">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border-[65px] border-white/5" />
          <Container className="relative flex flex-col items-start gap-8 py-16 sm:py-20 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--orange)]">Estamos para orientarte</p>
              <h2 className="mt-4 text-balance font-display text-5xl leading-[0.94] tracking-[-0.04em] sm:text-6xl lg:text-7xl">¿Tenés dudas sobre qué marco elegir?</h2>
            </div>
            <WhatsAppButton message="Hola, necesito ayuda para elegir un marco." label="Hablar con un asesor" variant="light" className="shrink-0" />
          </Container>
        </div>
      </section>
    </>
  );
}
