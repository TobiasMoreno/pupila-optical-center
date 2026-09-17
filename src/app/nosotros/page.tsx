import type { Metadata } from "next";
import Image from "next/image";
import { Eye, HeartHandshake, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conocé la mirada de Pupila Centro Óptico: selección cuidada, asesoramiento humano y atención al detalle.",
};

const values = [
  { icon: Eye, title: "Mirar de verdad", text: "Escuchamos lo que necesitás y observamos cómo cada marco acompaña tus rasgos." },
  { icon: Sparkles, title: "Elegir con criterio", text: "Seleccionamos diseños por su calidad, comodidad y capacidad de durar más de una temporada." },
  { icon: HeartHandshake, title: "Acompañar de cerca", text: "Te explicamos cada opción con claridad para que tomes una decisión segura y propia." },
];

export default function AboutPage() {
  return (
    <>
      <section className="overflow-hidden border-b border-[var(--line)]">
        <Container className="grid min-h-[70vh] items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="eyebrow">Nuestra forma de ver</p>
            <h1 className="mt-5 text-balance font-display text-6xl leading-[0.9] tracking-[-0.055em] sm:text-7xl lg:text-8xl">Ver bien. Sentirte vos.</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--ink-soft)]">Pupila nace de una idea simple: elegir anteojos debería sentirse personal. Un encuentro entre precisión, diseño y la forma única en que cada persona mira el mundo.</p>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-xl overflow-hidden rounded-[48%_48%_12%_12%] bg-white shadow-[0_35px_90px_rgba(50,25,48,.12)]">
            <Image src="/logo-pupila.jpeg" alt="Identidad visual de Pupila Centro Óptico" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </Container>
      </section>
      <section className="bg-[var(--surface)] py-20 sm:py-28">
        <Container>
          <p className="eyebrow">Lo que nos guía</p>
          <h2 className="mt-4 max-w-3xl font-display text-5xl leading-[0.95] tracking-[-0.045em] sm:text-6xl">La atención de siempre, con una mirada contemporánea</h2>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {values.map(({ icon: Icon, title, text }, index) => (
              <article key={title} className="rounded-[1.6rem] border border-[var(--line)] bg-[var(--paper)] p-7">
                <div className="flex items-center justify-between"><Icon className="h-7 w-7 text-[var(--plum)]" /><span className="font-display text-4xl text-[var(--plum)]/15">0{index + 1}</span></div>
                <h3 className="mt-12 font-display text-3xl tracking-[-0.03em]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="py-20 sm:py-28">
        <Container className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div><p className="eyebrow">Conocé la selección</p><h2 className="mt-4 max-w-3xl font-display text-5xl leading-[0.95] tracking-[-0.045em] sm:text-6xl">Un buen marco no cambia quién sos. Lo revela.</h2></div>
          <Button href="/catalogo" showArrow>Explorar catálogo</Button>
        </Container>
      </section>
    </>
  );
}
