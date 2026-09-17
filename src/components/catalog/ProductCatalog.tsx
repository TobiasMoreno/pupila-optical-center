"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import { ProductFilters, type FilterState } from "./ProductFilters";
import { ProductGrid } from "./ProductGrid";

export function ProductCatalog() {
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    category: searchParams.get("categoria") ?? "",
    brand: "",
    gender: searchParams.get("genero") ?? "",
    material: "",
    color: "",
    availability: "",
  });

  const brands = [...new Set(products.map((product) => product.brand))].sort();
  const materials = [...new Set(products.map((product) => product.material))].sort();
  const colors = [...new Set(products.flatMap((product) => product.colors.map((color) => color.name)))].sort();

  const filtered = useMemo(() => products.filter((product) => {
    const search = filters.search.toLocaleLowerCase("es").trim();
    return (!search || `${product.brand} ${product.model}`.toLocaleLowerCase("es").includes(search))
      && (!filters.category || product.category === filters.category)
      && (!filters.brand || product.brand === filters.brand)
      && (!filters.gender || product.gender === filters.gender)
      && (!filters.material || product.material === filters.material)
      && (!filters.color || product.colors.some((color) => color.name === filters.color))
      && (!filters.availability || (filters.availability === "available" ? product.available : !product.available));
  }), [filters]);

  return (
    <div className="grid items-start gap-10 lg:grid-cols-[250px_minmax(0,1fr)] xl:grid-cols-[280px_minmax(0,1fr)]">
      <div>
        <ProductFilters filters={filters} onChange={setFilters} brands={brands} materials={materials} colors={colors} resultCount={filtered.length} />
      </div>
      <div>
        <div className="mb-6 hidden items-center justify-between lg:flex">
          <p className="text-sm text-[var(--ink-soft)]"><span className="font-semibold text-[var(--ink)]">{filtered.length}</span> modelos encontrados</p>
          <span className="text-xs uppercase tracking-[0.14em] text-[var(--ink-soft)]">Selección Pupila</span>
        </div>
        <ProductGrid products={filtered} />
      </div>
    </div>
  );
}
