export function CtaCubeDecor() {
  const cubes = [
    { left: "4%", top: "55%", size: 28, opacity: 0.15, rotate: 12 },
    { left: "8%", top: "70%", size: 36, opacity: 0.22, rotate: -8 },
    { left: "14%", top: "45%", size: 22, opacity: 0.12, rotate: 20 },
    { left: "88%", top: "15%", size: 32, opacity: 0.18, rotate: -15 },
    { left: "92%", top: "30%", size: 24, opacity: 0.14, rotate: 10 },
    { left: "85%", top: "5%", size: 40, opacity: 0.2, rotate: -5 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {cubes.map((cube, i) => (
        <div
          key={i}
          className="absolute rounded-sm border border-border/60 bg-surface-elevated/40"
          style={{
            left: cube.left,
            top: cube.top,
            width: cube.size,
            height: cube.size,
            opacity: cube.opacity,
            transform: `rotate(${cube.rotate}deg)`,
          }}
        />
      ))}
    </div>
  );
}
