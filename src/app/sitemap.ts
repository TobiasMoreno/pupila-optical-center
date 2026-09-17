import type { MetadataRoute } from "next";
import { products } from "@/data/products";

const baseUrl = "https://pupilacentrooptico.com";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/catalogo", "/nosotros", "/contacto", "/preguntas-frecuentes"];
  return [
    ...pages.map((path) => ({ url: `${baseUrl}${path}`, changeFrequency: path === "/catalogo" ? "weekly" as const : "monthly" as const, priority: path === "" ? 1 : 0.8 })),
    ...products.map((product) => ({ url: `${baseUrl}/catalogo/${product.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
