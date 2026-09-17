"use client";

import { ChevronLeft, ChevronRight, Hand, LoaderCircle, Rotate3D } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface Product360ViewerProps {
  frames: string[];
  enabled?: boolean;
  alt: string;
}

export default function Product360Viewer({ frames, enabled = false, alt }: Product360ViewerProps) {
  const [frameIndex, setFrameIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [availableFrames, setAvailableFrames] = useState<string[]>([]);
  const [dragging, setDragging] = useState(false);
  const pointerStart = useRef<{ x: number; frame: number } | null>(null);

  useEffect(() => {
    let cancelled = false;
    if (!enabled || frames.length === 0) {
      return;
    }

    let settled = 0;
    const valid: Array<{ index: number; src: string }> = [];
    frames.forEach((src, index) => {
      const image = new window.Image();
      image.onload = () => {
        valid.push({ index, src });
        settled += 1;
        if (settled === frames.length && !cancelled) {
          setAvailableFrames(valid.sort((a, b) => a.index - b.index).map((item) => item.src));
          setLoaded(true);
        }
      };
      image.onerror = () => {
        settled += 1;
        if (settled === frames.length && !cancelled) {
          setAvailableFrames(valid.sort((a, b) => a.index - b.index).map((item) => item.src));
          setLoaded(true);
        }
      };
      image.src = src;
    });

    return () => {
      cancelled = true;
    };
  }, [enabled, frames]);

  const step = useCallback((amount: number) => {
    setFrameIndex((current) => {
      if (!availableFrames.length) return 0;
      return (current + amount + availableFrames.length) % availableFrames.length;
    });
  }, [availableFrames.length]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!availableFrames.length) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    pointerStart.current = { x: event.clientX, frame: frameIndex };
    setDragging(true);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!pointerStart.current || !availableFrames.length) return;
    const delta = event.clientX - pointerStart.current.x;
    const movedFrames = Math.round(delta / 9);
    const next = (pointerStart.current.frame - movedFrames + availableFrames.length * 10) % availableFrames.length;
    setFrameIndex(next);
  };

  const handlePointerEnd = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    pointerStart.current = null;
    setDragging(false);
  };

  if (!enabled || frames.length === 0) {
    return (
      <div className="relative flex aspect-[4/3] flex-col items-center justify-center overflow-hidden rounded-[1.8rem] bg-[var(--surface-muted)] text-center">
        <div className="placeholder-orbit opacity-60" />
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-[var(--line-strong)] bg-white/65">
          <Rotate3D className="h-9 w-9 text-[var(--plum)]" aria-hidden="true" />
        </div>
        <p className="relative mt-5 font-display text-2xl">Vista 360° próximamente</p>
        <p className="relative mt-2 max-w-xs px-6 text-sm leading-6 text-[var(--ink-soft)]">Estamos preparando una vista completa de este modelo.</p>
      </div>
    );
  }

  if (!loaded) {
    return (
      <div className="flex aspect-[4/3] flex-col items-center justify-center rounded-[1.8rem] bg-[var(--surface-muted)] text-[var(--ink-soft)]">
        <LoaderCircle className="h-8 w-8 animate-spin text-[var(--plum)]" />
        <p className="mt-4 text-sm font-semibold">Preparando vista 360°</p>
      </div>
    );
  }

  if (availableFrames.length === 0) {
    return (
      <div className="relative flex aspect-[4/3] flex-col items-center justify-center overflow-hidden rounded-[1.8rem] bg-[var(--surface-muted)] text-center">
        <div className="placeholder-orbit opacity-60" />
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-[var(--line-strong)] bg-white/65">
          <Rotate3D className="h-9 w-9 text-[var(--plum)]" aria-hidden="true" />
        </div>
        <p className="relative mt-5 font-display text-2xl">Vista 360° próximamente</p>
        <p className="relative mt-2 max-w-xs px-6 text-sm leading-6 text-[var(--ink-soft)]">Estamos preparando una vista completa de este modelo.</p>
      </div>
    );
  }

  return (
    <div
      className={cn("relative aspect-[4/3] touch-none select-none overflow-hidden rounded-[1.8rem] bg-[var(--surface-muted)]", dragging ? "cursor-grabbing" : "cursor-grab")}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerEnd}
      onPointerCancel={handlePointerEnd}
      tabIndex={0}
      role="slider"
      aria-label={`Vista 360 grados de ${alt}`}
      aria-valuemin={1}
      aria-valuemax={availableFrames.length}
      aria-valuenow={frameIndex + 1}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") step(-1);
        if (event.key === "ArrowRight") step(1);
      }}
    >
      {/* La etiqueta img evita recalcular el layout durante el arrastre rápido entre frames. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={availableFrames[frameIndex]} alt={`${alt}, vista 360°, cuadro ${frameIndex + 1}`} draggable={false} className="h-full w-full object-cover" />
      <div className="pointer-events-none absolute inset-x-0 bottom-5 flex justify-center">
        <span className="flex items-center gap-2 rounded-full bg-[var(--ink)]/85 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
          <Hand className="h-3.5 w-3.5" /> Arrastrá para girar
        </span>
      </div>
      <button type="button" onClick={(event) => { event.stopPropagation(); step(-1); }} className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 shadow-sm" aria-label="Frame anterior"><ChevronLeft className="h-5 w-5" /></button>
      <button type="button" onClick={(event) => { event.stopPropagation(); step(1); }} className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 shadow-sm" aria-label="Frame siguiente"><ChevronRight className="h-5 w-5" /></button>
    </div>
  );
}
