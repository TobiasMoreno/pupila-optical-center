import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function ProductNotFound() {
  return (
    <Container className="flex min-h-[65vh] flex-col items-center justify-center py-20 text-center">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-5 font-display text-6xl tracking-[-0.05em]">Ese modelo no está acá</h1>
      <p className="mt-4 max-w-md text-[var(--ink-soft)]">Puede que haya cambiado de nombre o ya no forme parte de nuestra selección.</p>
      <Button href="/catalogo" className="mt-8">Volver al catálogo</Button>
    </Container>
  );
}
