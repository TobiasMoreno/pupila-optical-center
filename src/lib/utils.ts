export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function generate360Frames(basePath: string, count = 36): string[] {
  const cleanPath = basePath.replace(/\/$/, "");
  return Array.from({ length: count }, (_, index) => {
    const frame = String(index + 1).padStart(2, "0");
    return `${cleanPath}/frame-${frame}.webp`;
  });
}

export function formatCategory(category: "receta" | "sol") {
  return category === "receta" ? "Anteojos de receta" : "Anteojos de sol";
}

export function formatGender(gender: string) {
  return gender === "niños"
    ? "Niños"
    : `${gender.charAt(0).toUpperCase()}${gender.slice(1)}`;
}
