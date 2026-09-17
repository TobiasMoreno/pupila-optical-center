"use client";

import { Check, ChevronDown, RotateCcw, Search, SlidersHorizontal, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface FilterState {
  search: string;
  category: string;
  brand: string;
  gender: string;
  material: string;
  color: string;
  availability: string;
}

interface ProductFiltersProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  brands: string[];
  materials: string[];
  colors: string[];
  resultCount: number;
}

const initialFilters: FilterState = { search: "", category: "", brand: "", gender: "", material: "", color: "", availability: "" };

function FilterSelect({ label, value, options, onChange }: { label: string; value: string; options: Array<{ value: string; label: string }>; onChange: (value: string) => void }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--ink-soft)]">{label}</span>
      <span className="relative block">
        <select value={value} onChange={(event) => onChange(event.target.value)} className="h-12 w-full appearance-none rounded-xl border border-[var(--line)] bg-white px-3 pr-10 text-sm outline-none transition hover:border-[var(--line-strong)] focus:border-[var(--plum)]">
          <option value="">Todos</option>
          {options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--ink-soft)]" />
      </span>
    </label>
  );
}

export function ProductFilters({ filters, onChange, brands, materials, colors, resultCount }: ProductFiltersProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const set = (key: keyof FilterState, value: string) => onChange({ ...filters, [key]: value });
  const activeCount = Object.values(filters).filter(Boolean).length;

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const fields = (
    <>
      <FilterSelect label="Categoría" value={filters.category} onChange={(value) => set("category", value)} options={[{ value: "receta", label: "Anteojos de receta" }, { value: "sol", label: "Anteojos de sol" }]} />
      <FilterSelect label="Marca" value={filters.brand} onChange={(value) => set("brand", value)} options={brands.map((value) => ({ value, label: value }))} />
      <FilterSelect label="Género" value={filters.gender} onChange={(value) => set("gender", value)} options={[{ value: "hombre", label: "Hombre" }, { value: "mujer", label: "Mujer" }, { value: "unisex", label: "Unisex" }, { value: "niños", label: "Niños" }]} />
      <FilterSelect label="Material" value={filters.material} onChange={(value) => set("material", value)} options={materials.map((value) => ({ value, label: value }))} />
      <FilterSelect label="Color" value={filters.color} onChange={(value) => set("color", value)} options={colors.map((value) => ({ value, label: value }))} />
      <FilterSelect label="Disponibilidad" value={filters.availability} onChange={(value) => set("availability", value)} options={[{ value: "available", label: "Disponible" }, { value: "unavailable", label: "Consultar" }]} />
    </>
  );

  return (
    <>
      <div className="mb-8">
        <label className="relative block">
          <span className="sr-only">Buscar por modelo o marca</span>
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--ink-soft)]" />
          <input type="search" value={filters.search} onChange={(event) => set("search", event.target.value)} placeholder="Buscar por modelo o marca…" className="h-14 w-full rounded-full border border-[var(--line)] bg-white pl-12 pr-5 text-base outline-none transition focus:border-[var(--plum)] focus:ring-4 focus:ring-[var(--plum)]/5" />
        </label>
      </div>

      <div className="mb-7 flex items-center justify-between lg:hidden">
        <button type="button" onClick={() => setMobileOpen(true)} className="flex h-11 items-center gap-2 rounded-full border border-[var(--ink)] px-4 text-sm font-semibold">
          <SlidersHorizontal className="h-4 w-4" /> Filtros {activeCount > 0 && <span className="rounded-full bg-[var(--plum)] px-1.5 py-0.5 text-[0.65rem] text-white">{activeCount}</span>}
        </button>
        <span className="text-sm text-[var(--ink-soft)]">{resultCount} modelos</span>
      </div>

      <aside className="hidden lg:block">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-semibold"><SlidersHorizontal className="h-4 w-4" /> Filtrar catálogo</div>
          {activeCount > 0 && <button type="button" onClick={() => onChange(initialFilters)} className="flex items-center gap-1.5 text-xs font-semibold text-[var(--plum)] hover:underline"><RotateCcw className="h-3.5 w-3.5" /> Limpiar filtros</button>}
        </div>
        <div className="space-y-5">{fields}</div>
      </aside>

      <div className={cn("fixed inset-0 z-[70] bg-black/30 transition lg:hidden", mobileOpen ? "visible opacity-100" : "invisible opacity-0")} onClick={() => setMobileOpen(false)} />
      <aside className={cn("fixed inset-x-0 bottom-0 z-[80] max-h-[88dvh] overflow-y-auto rounded-t-[2rem] bg-[var(--paper)] p-5 shadow-2xl transition duration-300 lg:hidden", mobileOpen ? "translate-y-0" : "translate-y-full")} aria-hidden={!mobileOpen}>
        <div className="mb-6 flex items-center justify-between">
          <div><p className="font-display text-2xl">Filtros</p><p className="text-xs text-[var(--ink-soft)]">{resultCount} modelos encontrados</p></div>
          <button type="button" onClick={() => setMobileOpen(false)} className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)]" aria-label="Cerrar filtros"><X className="h-4 w-4" /></button>
        </div>
        <div className="space-y-5">{fields}</div>
        <div className="sticky bottom-0 mt-7 grid grid-cols-2 gap-3 bg-[var(--paper)] py-3">
          <button type="button" onClick={() => onChange(initialFilters)} className="h-12 rounded-full border border-[var(--ink)] text-sm font-semibold">Limpiar filtros</button>
          <button type="button" onClick={() => setMobileOpen(false)} className="flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--plum)] text-sm font-semibold text-white"><Check className="h-4 w-4" /> Ver resultados</button>
        </div>
      </aside>
    </>
  );
}
