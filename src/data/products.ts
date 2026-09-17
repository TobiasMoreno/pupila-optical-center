import type { Product } from "@/types/product";
import { generate360Frames } from "@/lib/utils";

const imageSet = (folder: string) => [
  `/products/${folder}/main.webp`,
  `/products/${folder}/side.webp`,
  `/products/${folder}/detail.webp`,
];

export const products: Product[] = [
  {
    id: "av101",
    slug: "atelier-vision-av101",
    brand: "Atelier Vision",
    model: "AV101",
    category: "receta",
    gender: "unisex",
    material: "Acetato italiano",
    colors: [
      { name: "Ciruela", hex: "#6f126b" },
      { name: "Habano", hex: "#8b5a3c" },
      { name: "Negro", hex: "#1b1a1a" },
    ],
    measurements: { lensWidth: 50, bridgeWidth: 20, templeLength: 145 },
    description:
      "Una silueta serena de líneas redondeadas y presencia liviana. Diseñado para acompañar todos los días sin perder carácter.",
    images: imageSet("av101"),
    spin360: { enabled: false, frames: generate360Frames("/products/av101/360", 36) },
    available: true,
    featured: true,
  },
  {
    id: "av102",
    slug: "atelier-vision-av102",
    brand: "Atelier Vision",
    model: "AV102",
    category: "receta",
    gender: "mujer",
    material: "Acetato pulido",
    colors: [
      { name: "Borgoña", hex: "#72223a" },
      { name: "Cristal", hex: "#d8d1c8" },
    ],
    measurements: { lensWidth: 52, bridgeWidth: 18, templeLength: 140 },
    description:
      "Frente sutilmente elevado y terminaciones suaves. Un diseño luminoso que equilibra elegancia y comodidad.",
    images: imageSet("av102"),
    available: true,
    featured: true,
  },
  {
    id: "lm200",
    slug: "lumina-l200",
    brand: "Lumina",
    model: "L200",
    category: "sol",
    gender: "mujer",
    material: "Acetato bio-based",
    colors: [
      { name: "Ámbar", hex: "#b56f33" },
      { name: "Negro", hex: "#171717" },
      { name: "Oliva", hex: "#64664a" },
    ],
    measurements: { lensWidth: 54, bridgeWidth: 19, templeLength: 145 },
    description:
      "Un cat-eye contemporáneo con volumen preciso y lentes amplios. Expresivo, equilibrado y fácil de llevar.",
    images: imageSet("l200"),
    available: true,
    featured: true,
  },
  {
    id: "lm220",
    slug: "lumina-l220",
    brand: "Lumina",
    model: "L220",
    category: "sol",
    gender: "unisex",
    material: "Metal y acetato",
    colors: [
      { name: "Dorado mate", hex: "#aa8b52" },
      { name: "Grafito", hex: "#51545a" },
    ],
    measurements: { lensWidth: 51, bridgeWidth: 21, templeLength: 145 },
    description:
      "Forma pantos y puente metálico para una expresión atemporal. Liviano en el rostro, distintivo a la distancia.",
    images: imageSet("l220"),
    available: false,
  },
  {
    id: "no310",
    slug: "north-optical-n310",
    brand: "North Optical",
    model: "N310",
    category: "receta",
    gender: "hombre",
    material: "Titanio",
    colors: [
      { name: "Grafito", hex: "#4c4b4d" },
      { name: "Azul noche", hex: "#25344a" },
    ],
    measurements: { lensWidth: 53, bridgeWidth: 19, templeLength: 145 },
    description:
      "Arquitectura limpia, perfil ultradelgado y bisagras flexibles. Precisión técnica para una comodidad que dura todo el día.",
    images: imageSet("n310"),
    available: true,
    featured: true,
  },
  {
    id: "no330",
    slug: "north-optical-n330",
    brand: "North Optical",
    model: "N330",
    category: "sol",
    gender: "hombre",
    material: "Acetato",
    colors: [
      { name: "Negro", hex: "#161616" },
      { name: "Carey", hex: "#77513b" },
    ],
    measurements: { lensWidth: 55, bridgeWidth: 18, templeLength: 145 },
    description:
      "Geometría firme y proporciones generosas. Un marco solar con identidad, inspirado en el diseño de los años setenta.",
    images: imageSet("n330"),
    available: true,
  },
  {
    id: "oc410",
    slug: "orbe-collective-o410",
    brand: "Orbe Collective",
    model: "O410",
    category: "receta",
    gender: "unisex",
    material: "Acetato translúcido",
    colors: [
      { name: "Cristal humo", hex: "#9b9690" },
      { name: "Miel", hex: "#c28a45" },
      { name: "Rosa té", hex: "#b98882" },
    ],
    measurements: { lensWidth: 49, bridgeWidth: 21, templeLength: 140 },
    description:
      "Transparencias suaves y contornos orgánicos crean un marco versátil con un gesto de color apenas perceptible.",
    images: imageSet("o410"),
    available: true,
    featured: true,
  },
  {
    id: "oc420",
    slug: "orbe-collective-o420",
    brand: "Orbe Collective",
    model: "O420",
    category: "sol",
    gender: "unisex",
    material: "Acetato reciclado",
    colors: [
      { name: "Naranja quemado", hex: "#c86136" },
      { name: "Verde bosque", hex: "#2f493e" },
    ],
    measurements: { lensWidth: 52, bridgeWidth: 22, templeLength: 145 },
    description:
      "Una forma audaz suavizada por bordes pulidos a mano. Color, proporción y una mirada decididamente actual.",
    images: imageSet("o420"),
    spin360: { enabled: false, frames: [] },
    available: true,
    featured: true,
  },
  {
    id: "av120",
    slug: "atelier-vision-av120",
    brand: "Atelier Vision",
    model: "AV120",
    category: "receta",
    gender: "niños",
    material: "TR90 flexible",
    colors: [
      { name: "Azul cielo", hex: "#4b89b8" },
      { name: "Coral", hex: "#e07064" },
    ],
    measurements: { lensWidth: 45, bridgeWidth: 17, templeLength: 130 },
    description:
      "Flexible, liviano y preparado para el movimiento. Un diseño cómodo que suma color sin perder resistencia.",
    images: imageSet("av120"),
    available: true,
  },
  {
    id: "lm240",
    slug: "lumina-l240",
    brand: "Lumina",
    model: "L240",
    category: "sol",
    gender: "niños",
    material: "TR90 flexible",
    colors: [
      { name: "Violeta", hex: "#74518e" },
      { name: "Mandarina", hex: "#eb8641" },
    ],
    measurements: { lensWidth: 46, bridgeWidth: 16, templeLength: 130 },
    description:
      "Protección y libertad para días al aire libre. Patillas flexibles y una forma envolvente pensada para chicos.",
    images: imageSet("l240"),
    available: false,
  },
  {
    id: "no350",
    slug: "north-optical-n350",
    brand: "North Optical",
    model: "N350",
    category: "receta",
    gender: "hombre",
    material: "Metal inoxidable",
    colors: [
      { name: "Plata", hex: "#aaa9a7" },
      { name: "Negro mate", hex: "#242424" },
    ],
    measurements: { lensWidth: 54, bridgeWidth: 20, templeLength: 150 },
    description:
      "Rectangular y esencial, con una construcción metálica fina y terminales de acetato para un calce estable.",
    images: imageSet("n350"),
    available: true,
  },
  {
    id: "oc440",
    slug: "orbe-collective-o440",
    brand: "Orbe Collective",
    model: "O440",
    category: "sol",
    gender: "mujer",
    material: "Acetato italiano",
    colors: [
      { name: "Crema", hex: "#e7ded0" },
      { name: "Cereza", hex: "#8f203f" },
    ],
    measurements: { lensWidth: 53, bridgeWidth: 20, templeLength: 140 },
    description:
      "Una pieza escultórica de líneas suaves y actitud luminosa. El detalle de color transforma una silueta clásica.",
    images: imageSet("o440"),
    available: true,
    featured: true,
  },
];

export const featuredProducts = products.filter((product) => product.featured);

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
