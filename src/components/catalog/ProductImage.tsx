"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProductImageProps {
  src?: string;
  alt: string;
  model: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}

function GlassesPlaceholder({ model }: { model: string }) {
  const seed = model.split("").reduce((total, char) => total + char.charCodeAt(0), 0);
  const hueClass = ["placeholder-plum", "placeholder-orange", "placeholder-smoke"][seed % 3];

  return (
    <div className={cn("absolute inset-0 overflow-hidden", hueClass)} aria-hidden="true">
      <div className="placeholder-orbit" />
      <svg className="absolute left-1/2 top-1/2 w-[67%] -translate-x-1/2 -translate-y-[58%]" viewBox="0 0 440 180" fill="none">
        <path d="M28 72c40-23 105-21 153 0l-9 62c-38 19-91 13-112-13C43 101 36 86 28 72Z" stroke="currentColor" strokeWidth="7" />
        <path d="M412 72c-40-23-105-21-153 0l9 62c38 19 91 13 112-13 17-20 24-35 32-49Z" stroke="currentColor" strokeWidth="7" />
        <path d="M181 76c25-18 53-18 78 0M28 73 2 57m410 16 26-16" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      </svg>
      <span className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-current/70">
        {model}
      </span>
    </div>
  );
}

export function ProductImage({ src, alt, model, priority = false, sizes = "(max-width: 768px) 100vw, 33vw", className }: ProductImageProps) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
  const failed = !src || failedSrc === src;
  const loaded = loadedSrc === src;

  return (
    <div className={cn("relative aspect-[4/3] overflow-hidden bg-[var(--surface-muted)]", className)}>
      <GlassesPlaceholder model={model} />
      {src && !failed && (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn("object-cover transition duration-700", loaded ? "opacity-100" : "opacity-0")}
          onLoad={() => setLoadedSrc(src)}
          onError={() => setFailedSrc(src)}
        />
      )}
    </div>
  );
}
