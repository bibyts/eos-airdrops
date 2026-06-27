// Deterministic, seed-based SVG "Space Hobo" placeholder art.
// Swap this out for your real PNG/IPFS art later — the gallery just maps over seeds.

const SKIN = ["#caa17a", "#9d7b58", "#7bd389", "#8fb8ff", "#d98fc0", "#c0c0d0"];
const HELMET = ["#3dd6c4", "#ff7a45", "#9d4edd", "#ffd166", "#5ad1ff"];
const PATCH = ["#ff7a45", "#3dd6c4", "#ffd166", "#9d4edd"];

function hash(seed: number) {
  let h = seed * 2654435761;
  h ^= h >> 15;
  return Math.abs(h);
}

export default function HoboAvatar({ seed }: { seed: number }) {
  const h = hash(seed);
  const skin = SKIN[h % SKIN.length];
  const helmet = HELMET[(h >> 3) % HELMET.length];
  const patch = PATCH[(h >> 6) % PATCH.length];
  const hasAntenna = (h >> 9) % 2 === 0;
  const grin = (h >> 11) % 3;

  return (
    <svg viewBox="0 0 200 200" className="h-full w-full" role="img" aria-label={`Space Hobo #${seed}`}>
      <defs>
        <radialGradient id={`bg-${seed}`} cx="50%" cy="35%" r="75%">
          <stop offset="0%" stopColor="#1a1340" />
          <stop offset="100%" stopColor="#06040f" />
        </radialGradient>
      </defs>
      <rect width="200" height="200" fill={`url(#bg-${seed})`} />

      {/* stars */}
      {[...Array(10)].map((_, i) => (
        <circle
          key={i}
          cx={(hash(seed + i) % 190) + 5}
          cy={(hash(seed * 3 + i) % 190) + 5}
          r={(i % 2) + 0.6}
          fill="#ffffff"
          opacity={0.6}
        />
      ))}

      {/* body / poncho */}
      <path d="M60 170 Q100 120 140 170 Z" fill={patch} opacity="0.9" />
      <rect x="78" y="120" width="44" height="40" rx="10" fill="#2a2350" />

      {/* head */}
      <circle cx="100" cy="92" r="34" fill={skin} />

      {/* helmet dome */}
      <path
        d="M66 92 a34 34 0 0 1 68 0 Z"
        fill={helmet}
        opacity="0.28"
      />
      <path d="M66 92 a34 34 0 0 1 68 0" fill="none" stroke={helmet} strokeWidth="3" />

      {/* antenna */}
      {hasAntenna && (
        <g stroke={helmet} strokeWidth="3">
          <line x1="100" y1="58" x2="100" y2="42" />
          <circle cx="100" cy="40" r="4" fill={helmet} stroke="none" />
        </g>
      )}

      {/* eyes */}
      <circle cx="88" cy="90" r="5" fill="#06040f" />
      <circle cx="112" cy="90" r="5" fill="#06040f" />
      <circle cx="89.5" cy="88.5" r="1.6" fill="#fff" />
      <circle cx="113.5" cy="88.5" r="1.6" fill="#fff" />

      {/* mouth — scrappy grin variations */}
      {grin === 0 && <path d="M88 106 Q100 116 112 106" fill="none" stroke="#06040f" strokeWidth="3" strokeLinecap="round" />}
      {grin === 1 && <path d="M88 108 L112 108" stroke="#06040f" strokeWidth="3" strokeLinecap="round" />}
      {grin === 2 && <path d="M90 106 Q100 118 110 106 Q100 110 90 106 Z" fill="#06040f" />}

      {/* bindle stick over shoulder */}
      <line x1="128" y1="150" x2="158" y2="112" stroke="#7a5230" strokeWidth="4" strokeLinecap="round" />
      <circle cx="160" cy="108" r="10" fill={patch} />
    </svg>
  );
}
