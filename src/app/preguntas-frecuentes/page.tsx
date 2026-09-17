import type { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import { WhatsAppButton } from "@/components/contact/WhatsAppButton";
import { Container } from "@/components/ui/Container";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description: "Respuestas sobre lentes con receta, obras sociales, tiempos, envíos de receta, horarios y atención en Pupila.",
};

export default function FAQPage() {
  return (
    <>
      <header className="border-b border-[var(--line)] bg-[var(--surface)]">
        <Container className="py-16 sm:py-24">
          <p className="eyebrow">Antes de visitarnos</p>
          <h1 className="mt-5 max-w-4xl text-balance font-display text-6xl leading-[0.9] tracking-[-0.055em] sm:text-7xl lg:text-8xl">Preguntas frecuentes</h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[var(--ink-soft)]">Todo lo que necesitás saber para elegir, consultar y preparar tu visita.</p>
        </Container>
      </header>
      <Container className="grid gap-14 py-16 sm:py-24 lg:grid-cols-[1fr_0.48fr]">
        <div className="border-t border-[var(--line-strong)]">
          {faqs.filter((faq) => faq.id !== "asesor").map((faq, index) => (
            <details key={faq.id} className="group border-b border-[var(--line)]">
              <summary className="flex list-none items-center gap-4 py-6 marker:content-none">
                <span className="text-xs font-semibold text-[var(--plum)]">0{index + 1}</span>
                <h2 className="flex-1 font-display text-2xl tracking-[-0.025em] sm:text-3xl">{faq.question}</h2>
                <ChevronDown className="h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="pb-7 pl-10 pr-10 text-sm leading-7 text-[var(--ink-soft)] sm:text-base">{faq.answer}</div>
            </details>
          ))}
        </div>
        <aside className="h-fit rounded-[1.8rem] bg-[var(--plum)] p-7 text-white lg:sticky lg:top-28">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--orange)]">¿Te quedó alguna duda?</p>
          <h2 className="mt-5 font-display text-4xl leading-[0.98]">Hablemos de lo que necesitás</h2>
          <p className="mt-4 text-sm leading-6 text-white/65">Nuestro equipo puede orientarte sobre recetas, marcos y cristales.</p>
          <WhatsAppButton className="mt-6 w-full" variant="light" message="Hola, tengo una pregunta sobre sus servicios." label="Hacer una consulta" />
        </aside>
      </Container>
    </>
  );
}
