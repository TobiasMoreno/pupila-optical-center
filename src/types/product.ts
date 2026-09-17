export interface ProductColor {
  name: string;
  hex?: string;
}

export interface Product {
  id: string;
  slug: string;
  brand: string;
  model: string;
  category: "receta" | "sol";
  gender: "hombre" | "mujer" | "unisex" | "niños";
  material: string;
  colors: ProductColor[];
  measurements: {
    lensWidth?: number;
    bridgeWidth?: number;
    templeLength?: number;
  };
  description: string;
  images: string[];
  spin360?: {
    enabled: boolean;
    frames: string[];
  };
  available: boolean;
  featured?: boolean;
}
