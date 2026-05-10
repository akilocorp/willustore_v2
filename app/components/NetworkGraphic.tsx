type Node = { id: string; x: number; y: number; r: number; delay: number };
type Edge = { from: string; to: string; delay: number };

const nodes: Node[] = [
  { id: "core", x: 250, y: 250, r: 14, delay: 0 },
  { id: "n1", x: 90, y: 110, r: 9, delay: 0.2 },
  { id: "n2", x: 410, y: 100, r: 8, delay: 0.5 },
  { id: "n3", x: 60, y: 290, r: 10, delay: 0.9 },
  { id: "n4", x: 440, y: 280, r: 9, delay: 1.3 },
  { id: "n5", x: 150, y: 410, r: 8, delay: 1.7 },
  { id: "n6", x: 360, y: 410, r: 10, delay: 2.1 },
  { id: "n7", x: 250, y: 60, r: 7, delay: 0.8 },
  { id: "n8", x: 250, y: 460, r: 7, delay: 1.5 },
];

const edges: Edge[] = [
  { from: "core", to: "n1", delay: 0 },
  { from: "core", to: "n2", delay: 0.4 },
  { from: "core", to: "n3", delay: 0.8 },
  { from: "core", to: "n4", delay: 1.2 },
  { from: "core", to: "n5", delay: 1.6 },
  { from: "core", to: "n6", delay: 2.0 },
  { from: "core", to: "n7", delay: 0.6 },
  { from: "core", to: "n8", delay: 1.8 },
  { from: "n1", to: "n7", delay: 2.4 },
  { from: "n2", to: "n7", delay: 2.8 },
  { from: "n3", to: "n5", delay: 3.0 },
  { from: "n4", to: "n6", delay: 3.4 },
];

function nodeById(id: string) {
  return nodes.find((n) => n.id === id)!;
}

export default function NetworkGraphic() {
  return (
    <svg
      viewBox="0 0 500 500"
      className="w-full h-full"
      aria-hidden="true"
      role="img"
    >
      <defs>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2196f3" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#2196f3" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="line" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2196f3" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#2196f3" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#2196f3" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      <circle cx="250" cy="250" r="220" fill="url(#glow)" />

      {edges.map((e, i) => {
        const a = nodeById(e.from);
        const b = nodeById(e.to);
        return (
          <g key={i}>
            <line
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="url(#line)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="#2196f3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="6 6"
              style={{
                animation: `flow 4s ease-in-out ${e.delay}s infinite`,
              }}
            />
          </g>
        );
      })}

      {nodes.map((n) => (
        <g key={n.id}>
          <circle
            cx={n.x}
            cy={n.y}
            r={n.r + 6}
            fill="#2196f3"
            opacity="0.12"
            style={{
              transformOrigin: `${n.x}px ${n.y}px`,
              animation: `pulse-node 3s ease-in-out ${n.delay}s infinite`,
            }}
          />
          <circle
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill={n.id === "core" ? "#0d2b4e" : "#2196f3"}
            stroke="#fff"
            strokeWidth="2"
          />
        </g>
      ))}
    </svg>
  );
}
