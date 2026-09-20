import type { Metadata } from "next";
import { Clock3, Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { WhatsAppButton } from "@/components/contact/WhatsAppButton";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { createWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contactá a Pupila Centro Óptico. Consultanos por modelos, recetas, disponibilidad y asesoramiento personalizado.",
};

export default function ContactPage() {
  return (
    <Container className="py-16 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div>
          <p className="eyebrow">Hablemos</p>
          <h1 className="mt-5 text-balance font-display text-6xl leading-[0.9] tracking-[-0.055em] sm:text-7xl">Tu próxima mirada empieza acá</h1>
          <p className="mt-6 max-w-md text-base leading-7 text-[var(--ink-soft)]">Escribinos por el medio que prefieras. Te ayudamos con modelos, recetas, cristales y disponibilidad.</p>
          <div className="mt-9 space-y-5 border-y border-[var(--line)] py-7 text-sm">
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 hover:text-[var(--plum)]"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-white"><Mail className="h-4 w-4" /></span>{siteConfig.email}</a>
            <a href={createWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[var(--plum)]"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-white"><WhatsAppIcon className="h-4 w-4" aria-hidden="true" /></span>{siteConfig.whatsappLabel}</a>
            <a href={siteConfig.mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[var(--plum)]"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-white"><MapPin className="h-4 w-4" /></span>{siteConfig.address}</a>
            <div className="flex items-start gap-3"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white"><Clock3 className="h-4 w-4" /></span><span className="space-y-1 pt-1">{siteConfig.openingHours.map((hours) => <span className="block" key={hours}>{hours}</span>)}</span></div>
          </div>
          <div className="mt-8 rounded-[1.5rem] bg-[var(--orange-soft)] p-6">
            <p className="font-display text-2xl">¿Preferís una respuesta rápida?</p>
            <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">También podés escribirnos directamente por WhatsApp.</p>
            <WhatsAppButton className="mt-5" message="Hola, quisiera hacer una consulta." />
          </div>
        </div>
        <ContactForm />
      </div>
    </Container>
  );
}
