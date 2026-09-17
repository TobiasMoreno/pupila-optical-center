"use client";

import { Bot, ChevronLeft, MessageCircleQuestion, RotateCcw, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { faqs, type FAQ } from "@/data/faqs";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type ChatItem = { id: string; role: "user" | "bot"; text: string; action?: FAQ["action"] };

const greeting: ChatItem = {
  id: "greeting",
  role: "bot",
  text: "¡Hola! ¿En qué podemos ayudarte?",
};

export function FAQChatbot() {
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState<ChatItem[]>([greeting]);
  const panelRef = useRef<HTMLDivElement>(null);

  const choose = (faq: FAQ) => {
    setHistory((current) => [
      ...current,
      { id: `${faq.id}-question-${current.length}`, role: "user", text: faq.question },
      { id: `${faq.id}-answer-${current.length}`, role: "bot", text: faq.answer, action: faq.action },
    ]);
  };

  const reset = () => setHistory([greeting]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    panelRef.current?.scrollTo({ top: panelRef.current.scrollHeight, behavior: "smooth" });
  }, [history]);

  return (
    <div className="fixed bottom-5 left-5 z-40 sm:bottom-7 sm:left-7">
      <div
        className={cn(
          "absolute bottom-16 left-0 flex h-[min(610px,calc(100dvh-110px))] w-[min(390px,calc(100vw-40px))] origin-bottom-left flex-col overflow-hidden rounded-[1.6rem] border border-[var(--line)] bg-[var(--paper)] shadow-[0_24px_80px_rgba(32,20,29,.2)] transition duration-300",
          open ? "visible translate-y-0 scale-100 opacity-100" : "invisible translate-y-3 scale-95 opacity-0",
        )}
        role="dialog"
        aria-modal="false"
        aria-label="Asistente de preguntas frecuentes"
      >
        <div className="flex items-center gap-3 bg-[var(--plum)] p-4 text-white">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
            <Bot className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="font-semibold">Asistente Pupila</p>
            <p className="text-xs text-white/65">Respuestas rápidas</p>
          </div>
          <button type="button" onClick={() => setOpen(false)} className="ml-auto flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/10" aria-label="Cerrar chat">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div ref={panelRef} className="flex-1 space-y-3 overflow-y-auto p-4" aria-live="polite">
          {history.map((item) => (
            <div key={item.id} className={cn("flex", item.role === "user" ? "justify-end" : "justify-start")}>
              <div className={cn("max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-6", item.role === "user" ? "rounded-br-sm bg-[var(--plum)] text-white" : "rounded-bl-sm bg-white text-[var(--ink)] shadow-sm ring-1 ring-[var(--line)]")}>
                <p>{item.text}</p>
                {item.action && (
                  <a href={createWhatsAppLink(item.action.message)} target="_blank" rel="noopener noreferrer" className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[var(--orange)] px-3 py-2 text-xs font-semibold text-[var(--ink)] transition hover:brightness-95">
                    {item.action.label}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-[var(--line)] bg-white p-3">
          <div className="mb-2 flex items-center justify-between px-1">
            <button type="button" onClick={reset} className="flex items-center gap-1.5 text-xs font-semibold text-[var(--ink-soft)] hover:text-[var(--plum)]">
              <RotateCcw className="h-3.5 w-3.5" /> Reiniciar
            </button>
            {history.length > 1 && (
              <button type="button" onClick={() => setHistory([greeting])} className="flex items-center gap-1 text-xs font-semibold text-[var(--ink-soft)] hover:text-[var(--plum)]">
                <ChevronLeft className="h-3.5 w-3.5" /> Volver al menú
              </button>
            )}
          </div>
          <div className="max-h-36 space-y-1.5 overflow-y-auto">
            {faqs.map((faq) => (
              <button key={faq.id} type="button" onClick={() => choose(faq)} className="w-full rounded-xl border border-[var(--line)] px-3 py-2 text-left text-xs font-medium transition hover:border-[var(--plum)] hover:bg-[var(--paper)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--plum)]">
                {faq.question}
              </button>
            ))}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex h-13 w-13 items-center justify-center rounded-full bg-[var(--orange)] text-[var(--ink)] shadow-[0_12px_34px_rgba(71,43,18,.2)] transition duration-300 hover:-translate-y-1 hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--orange)]"
        aria-expanded={open}
        aria-label={open ? "Cerrar asistente" : "Abrir asistente de preguntas frecuentes"}
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircleQuestion className="h-6 w-6" />}
      </button>
    </div>
  );
}
