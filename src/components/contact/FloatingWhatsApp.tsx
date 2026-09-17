import { MessageCircle } from "lucide-react";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <a
      href={createWhatsAppLink("Hola, quisiera hacer una consulta.")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 flex h-13 w-13 items-center justify-center rounded-full bg-[#236b4b] text-white shadow-[0_12px_34px_rgba(22,45,35,.28)] transition duration-300 hover:-translate-y-1 hover:bg-[#18583c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#236b4b] sm:bottom-7 sm:right-7"
      aria-label="Consultar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}
