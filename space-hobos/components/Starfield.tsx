// Pure-CSS/SVG animated starfield. No image assets, no client JS required.
export default function Starfield() {
  const stars = Array.from({ length: 60 });
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((_, i) => {
        // Deterministic pseudo-random placement so SSR and client match.
        const top = (i * 37) % 100;
        const left = (i * 61) % 100;
        const size = (i % 3) + 1;
        const delay = (i % 7) * 0.6;
        return (
          <span
            key={i}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              animationDelay: `${delay}s`,
              opacity: 0.5,
            }}
          />
        );
      })}
    </div>
  );
}
