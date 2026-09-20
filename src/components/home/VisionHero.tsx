"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useRef, useState, type PointerEvent } from "react";

const heroImage = "url('/images/pupila-hero-editorial.png')";

export function VisionHero() {
  const heroRef = useRef<HTMLElement>(null);
  const [isExploring, setIsExploring] = useState(false);

  function updateFocus(event: PointerEvent<HTMLElement>) {
    const hero = heroRef.current;
    if (!hero) return;

    const bounds = hero.getBoundingClientRect();
    hero.style.setProperty("--focus-x", `${event.clientX - bounds.left}px`);
    hero.style.setProperty("--focus-y", `${event.clientY - bounds.top}px`);
  }

  return (
    <section
      ref={heroRef}
      className="vision-hero"
      onPointerMove={updateFocus}
      onPointerEnter={() => setIsExploring(true)}
      onPointerLeave={() => setIsExploring(false)}
      aria-labelledby="hero-title"
    >
      <div className="vision-hero__image vision-hero__image--base" style={{ backgroundImage: heroImage }} />
      <div className="vision-hero__image vision-hero__image--focus" style={{ backgroundImage: heroImage }} />
      <div className="vision-hero__shade" />
      <div className={`vision-hero__lens ${isExploring ? "is-visible" : ""}`} aria-hidden="true" />

      <div className="vision-hero__headline">
        <p className="hero-kicker hero-entrance">Óptica boutique · Córdoba</p>
        <h1 id="hero-title" className="hero-entrance hero-entrance--1">
          <span className="hero-script">Todo cambia</span>
          <span>según cómo mirás</span>
        </h1>
      </div>

      <div className="vision-hero__aside hero-entrance hero-entrance--2">
        <p>Marcos con identidad, cristales precisos y asesoramiento para encontrar eso que se siente tan vos.</p>
      </div>

      <div className="vision-hero__action hero-entrance hero-entrance--3">
        <p>Descubrí formas, materiales y colores elegidos con otra mirada.</p>
        <Link href="/catalogo" className="hero-button">
          Explorar colección
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>

      <div className="vision-hero__hint" aria-hidden="true">
        <span>Mové para enfocar</span>
        <ArrowDown />
      </div>
    </section>
  );
}
