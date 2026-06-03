export function HeroWaves({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 600 700"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <radialGradient id="heroWaveGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#703bf7" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#703bf7" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="600" height="700" fill="url(#heroWaveGlow)" />
      {[220, 280, 340, 400, 460, 520].map((rx, i) => (
        <ellipse
          key={rx}
          cx="300"
          cy="350"
          rx={rx}
          ry={rx * 0.85}
          fill="none"
          stroke="currentColor"
          strokeWidth={i === 0 ? 1 : 0.75}
          opacity={0.25 + i * 0.07}
        />
      ))}
    </svg>
  );
}
