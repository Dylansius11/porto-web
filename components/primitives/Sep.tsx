interface SepProps {
  char?: string;
}

export function Sep({ char = "·" }: SepProps) {
  return <span style={{ color: "var(--accent)", margin: "0 2px" }}>{char}</span>;
}
