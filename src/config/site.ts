export const siteConfig = {
  name: "Pupila Centro Óptico",
  shortName: "Pupila",
  description:
    "Anteojos de receta y de sol seleccionados con criterio, asesoramiento cercano y una mirada puesta en vos.",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5493518649121",
  email: "hola@pupilacentrooptico.com",
  instagram: "https://instagram.com/pupilacentrooptico",
  instagramLabel: "@pupilacentrooptico",
  address: "Córdoba, Argentina",
  mapUrl: "https://maps.google.com/?q=Córdoba,Argentina",
  openingHours: [
    "Lunes a viernes · 9:00 a 18:00",
    "Sábados · 9:00 a 13:00",
  ],
  navigation: [
    { label: "Inicio", href: "/" },
    { label: "Catálogo", href: "/catalogo" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
    { label: "Contacto", href: "/contacto" },
  ],
};
