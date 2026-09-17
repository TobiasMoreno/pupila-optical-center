import { MessageCircle } from "lucide-react";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  message?: string;
  label?: string;
  className?: string;
  variant?: "light" | "dark";
}

export function WhatsAppButton({ message, label = "Hablar por WhatsApp", className, variant = "dark" }: WhatsAppButtonProps) {
  return (
    <a
      href={createWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4",
        variant === "dark"
          ? "bg-[var(--plum)] text-white hover:bg-[var(--plum-deep)] focus-visible:outline-[var(--plum)]"
          : "bg-white text-[var(--plum)] hover:bg-[var(--paper)] focus-visible:outline-white",
        className,
      )}
    >
      <MessageCircle className="h-4 w-4" aria-hidden="true" />
      {label}
    </a>
  );
}
