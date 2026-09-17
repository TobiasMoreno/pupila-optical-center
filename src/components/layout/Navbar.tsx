"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { Brand } from "@/components/ui/Brand";
import { Container } from "@/components/ui/Container";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color:var(--paper)]/92 backdrop-blur-xl">
      <Container className="flex h-[76px] items-center justify-between">
        <Brand />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegación principal">
          {siteConfig.navigation.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative py-2 text-sm font-medium text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--plum)]",
                  active && "text-[var(--ink)] after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-[var(--plum)]",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <a
          href={createWhatsAppLink("Hola, quisiera hacer una consulta.")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden min-h-11 items-center gap-2 rounded-full bg-[var(--plum)] px-4 text-sm font-semibold text-white transition hover:bg-[var(--plum-deep)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--plum)] lg:flex"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Consultar por WhatsApp
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] text-[var(--ink)] transition hover:border-[var(--plum)] lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 top-[77px] h-[calc(100dvh-77px)] origin-top bg-[var(--paper)] transition duration-300 lg:hidden",
          open ? "visible scale-y-100 opacity-100" : "invisible scale-y-95 opacity-0",
        )}
      >
        <Container className="flex h-full flex-col py-8">
          <nav className="divide-y divide-[var(--line)]" aria-label="Navegación móvil">
            {siteConfig.navigation.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-5 font-display text-3xl tracking-[-0.03em]"
              >
                {item.label}
                <span className="text-xs font-sans text-[var(--ink-soft)]">0{index + 1}</span>
              </Link>
            ))}
          </nav>
          <a
            href={createWhatsAppLink("Hola, quisiera hacer una consulta.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto flex min-h-14 items-center justify-center gap-2 rounded-full bg-[var(--plum)] px-5 font-semibold text-white"
          >
            <MessageCircle className="h-5 w-5" /> Consultar por WhatsApp
          </a>
        </Container>
      </div>
    </header>
  );
}
