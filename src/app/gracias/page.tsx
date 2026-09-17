import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function ThanksPage() {
  return (
    <Container className="flex min-h-[65vh] flex-col items-center justify-center py-20 text-center">
      <CheckCircle2 className="h-12 w-12 text-[var(--plum)]" />
      <h1 className="mt-5 font-display text-6xl tracking-[-0.05em]">¡Gracias por escribirnos!</h1>
      <p className="mt-4 max-w-md text-[var(--ink-soft)]">Recibimos tu consulta. Te vamos a responder a la brevedad.</p>
      <Button href="/catalogo" className="mt-8">Volver al catálogo</Button>
    </Container>
  );
}
