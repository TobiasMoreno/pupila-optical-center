export interface FAQAction {
  type: "whatsapp";
  label: string;
  message?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  action?: FAQAction;
}

export const faqs: FAQ[] = [
  {
    id: "receta",
    question: "¿Hacen lentes con receta?",
    answer:
      "Sí. Podés acercarnos tu receta o enviarla por WhatsApp y te asesoramos según tu graduación y estilo de vida.",
    action: {
      type: "whatsapp",
      label: "Enviar receta por WhatsApp",
      message: "Hola, quiero enviarles mi receta para recibir asesoramiento.",
    },
  },
  {
    id: "obras-sociales",
    question: "¿Trabajan con obras sociales?",
    answer:
      "Consultanos indicando tu obra social o prepaga. Te confirmamos las coberturas y la documentación necesaria.",
  },
  {
    id: "demora",
    question: "¿Cuánto demora un pedido?",
    answer:
      "El plazo depende del tipo de lente y tratamiento. En general, te informamos la fecha estimada al confirmar el pedido.",
  },
  {
    id: "receta-whatsapp",
    question: "¿Puedo enviar mi receta por WhatsApp?",
    answer:
      "Claro. Mandanos una foto nítida de la receta y te orientamos con las opciones disponibles.",
    action: {
      type: "whatsapp",
      label: "Enviar mi receta",
      message: "Hola, quiero enviarles una foto de mi receta.",
    },
  },
  {
    id: "sol",
    question: "¿Tienen lentes de sol?",
    answer:
      "Sí, contamos con modelos de sol para distintos estilos y rostros. Podés ver una selección desde el catálogo.",
  },
  {
    id: "ubicacion",
    question: "¿Dónde están ubicados?",
    answer: "Estamos en Córdoba, Argentina. Escribinos y te compartimos la ubicación exacta.",
  },
  {
    id: "horarios",
    question: "¿Cuáles son los horarios?",
    answer: "Atendemos de lunes a viernes de 9:00 a 18:00 y los sábados de 9:00 a 13:00.",
  },
  {
    id: "asesor",
    question: "Hablar con un asesor",
    answer: "Estamos para ayudarte a elegir. Abrí WhatsApp y contanos qué estás buscando.",
    action: {
      type: "whatsapp",
      label: "Hablar con un asesor",
      message: "Hola, me gustaría recibir asesoramiento para elegir mis anteojos.",
    },
  },
];
