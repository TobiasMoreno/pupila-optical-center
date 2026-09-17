import { Container } from "@/components/ui/Container";

export default function CatalogLoading() {
  return (
    <Container className="py-20">
      <div className="h-14 w-64 animate-pulse rounded bg-[var(--surface-muted)]" />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }, (_, index) => <div key={index} className="aspect-[4/3] animate-pulse rounded-[1.6rem] bg-[var(--surface-muted)]" />)}
      </div>
    </Container>
  );
}
