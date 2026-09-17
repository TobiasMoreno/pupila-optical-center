import { siteConfig } from "@/config/site";

export function createWhatsAppLink(message?: string, phone = siteConfig.whatsapp) {
  const cleanPhone = phone.replace(/\D/g, "");
  const text = message?.trim();
  return `https://wa.me/${cleanPhone}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
}

export function createProductWhatsAppMessage(brand: string, model: string) {
  return `Hola, quería consultar por el modelo ${brand} ${model}. ¿Está disponible?`;
}
