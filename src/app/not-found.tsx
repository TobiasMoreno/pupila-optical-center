import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[65vh] flex-col items-center justify-center py-20 text-center">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-5 font-display text-6xl tracking-[-0.05em]">Perdimos de vista esta página</h1>
      <p className="mt-4 max-w-md text-[var(--ink-soft)]">El enlace puede haber cambiado o la página ya no está disponible.</p>
      <Button href="/" className="mt-8">Volver al inicio</Button>
    </Container>
  );
}
