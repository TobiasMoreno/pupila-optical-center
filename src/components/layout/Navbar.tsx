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
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isLight = isHome && !scrolled && !open;

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 32);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "top-0 z-50 w-full border-b transition-all duration-500",
        isHome ? "fixed" : "sticky",
        isLight
          ? "border-white/15 bg-transparent text-white"
          : "border-[var(--line)] bg-[color:var(--paper)]/92 text-[var(--ink)] shadow-[0_6px_30px_rgba(32,27,31,.045)] backdrop-blur-xl",
      )}
    >
      <Container className="flex h-[76px] items-center justify-between">
        <Brand light={isLight} />

        <nav
          className={cn(
            "hidden items-center gap-1 rounded-full border px-2 py-1.5 backdrop-blur-md lg:flex",
            isLight ? "border-white/20 bg-white/10" : "border-[var(--line)] bg-white/45",
          )}
          aria-label="Navegación principal"
        >
          {siteConfig.navigation.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3.5 py-2 text-xs font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
                  isLight ? "text-white/75 hover:bg-white/15 hover:text-white focus-visible:outline-white" : "text-[var(--ink-soft)] hover:bg-white hover:text-[var(--ink)] focus-visible:outline-[var(--plum)]",
                  active && (isLight ? "bg-white/15 text-white" : "bg-white text-[var(--ink)]"),
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
          className={cn(
            "hidden min-h-11 items-center gap-2 rounded-full px-4 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 lg:flex",
            isLight ? "bg-white text-[var(--ink)] hover:bg-[var(--orange-soft)] focus-visible:outline-white" : "bg-[var(--plum)] text-white hover:bg-[var(--plum-deep)] focus-visible:outline-[var(--plum)]",
          )}
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Consultar
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-full border transition lg:hidden",
            isLight ? "border-white/35 text-white hover:bg-white/10" : "border-[var(--line)] text-[var(--ink)] hover:border-[var(--plum)]",
          )}
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
          "fixed inset-x-0 top-[77px] h-[calc(100dvh-77px)] origin-top bg-[var(--paper)] text-[var(--ink)] transition duration-300 lg:hidden",
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
