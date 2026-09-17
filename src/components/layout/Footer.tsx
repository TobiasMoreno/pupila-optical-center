import Link from "next/link";
import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import { Brand } from "@/components/ui/Brand";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-white">
      <Container className="py-14 sm:py-20">
        <div className="grid gap-12 border-b border-white/15 pb-14 md:grid-cols-[1.35fr_0.8fr_1fr]">
          <div>
            <Brand light />
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/60">{siteConfig.description}</p>
          </div>
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">Explorar</p>
            <nav className="flex flex-col gap-3" aria-label="Navegación del pie">
              {siteConfig.navigation.map((item) => (
                <Link key={item.href} href={item.href} className="w-fit text-sm text-white/75 transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">Encontranos</p>
            <div className="space-y-4 text-sm text-white/70">
              <a className="flex items-start gap-3 transition hover:text-white" href={createWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0" /> {siteConfig.whatsappLabel}
              </a>
              <a className="flex items-start gap-3 transition hover:text-white" href={`mailto:${siteConfig.email}`}>
                <Mail className="mt-0.5 h-4 w-4 shrink-0" /> {siteConfig.email}
              </a>
              <a className="flex items-start gap-3 transition hover:text-white" href={siteConfig.instagram} target="_blank" rel="noopener noreferrer">
                <Instagram className="mt-0.5 h-4 w-4 shrink-0" /> {siteConfig.instagramLabel}
              </a>
              <a className="flex items-start gap-3 transition hover:text-white" href={siteConfig.mapUrl} target="_blank" rel="noopener noreferrer">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" /> {siteConfig.address}
              </a>
            </div>
            <div className="mt-6 space-y-1 text-sm text-white/45">
              {siteConfig.openingHours.map((hours) => <p key={hours}>{hours}</p>)}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-7 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.</p>
          <p>Hecho con atención al detalle.</p>
        </div>
      </Container>
    </footer>
  );
}
