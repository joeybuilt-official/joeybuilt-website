"use client";

import { useEffect, useRef } from "react";

interface AppNode {
  name: string;
  status: "beta" | "development" | "spec";
  angle: number;
}

const apps: AppNode[] = [
  { name: "Fylo", status: "development", angle: 0 },
  { name: "Fonto", status: "development", angle: 45 },
  { name: "Nexalog", status: "development", angle: 90 },
  { name: "Levio", status: "development", angle: 135 },
  { name: "Koforje", status: "spec", angle: 180 },
  { name: "Pushd", status: "development", angle: 225 },
  { name: "Fabric", status: "development", angle: 270 },
  { name: "Boost", status: "beta", angle: 315 },
];

const statusColor: Record<string, string> = {
  beta: "#7eb8c9",
  development: "#6366f1",
  spec: "#8b5cf6",
};

export function EcosystemDiagram() {
  const svgRef = useRef<SVGSVGElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    if (animatedRef.current) return;
    animatedRef.current = true;

    const svg = svgRef.current;
    if (!svg) return;

    const lines = svg.querySelectorAll<SVGLineElement>("[data-line]");
    const nodes = svg.querySelectorAll<SVGGElement>("[data-node]");
    const center = svg.querySelector<SVGGElement>("[data-center]");

    // Animate center first
    if (center) {
      center.style.opacity = "0";
      center.style.transform = "scale(0.8)";
      center.style.transformOrigin = "center";
      center.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      requestAnimationFrame(() => {
        center.style.opacity = "1";
        center.style.transform = "scale(1)";
      });
    }

    // Then lines
    lines.forEach((line, i) => {
      line.style.opacity = "0";
      line.style.transition = `opacity 0.4s ease ${0.3 + i * 0.08}s`;
      requestAnimationFrame(() => {
        line.style.opacity = "1";
      });
    });

    // Then nodes
    nodes.forEach((node, i) => {
      node.style.opacity = "0";
      node.style.transform = "scale(0.85)";
      node.style.transformOrigin = "center";
      node.style.transition = `opacity 0.4s ease ${0.5 + i * 0.08}s, transform 0.4s ease ${0.5 + i * 0.08}s`;
      requestAnimationFrame(() => {
        node.style.opacity = "1";
        node.style.transform = "scale(1)";
      });
    });
  }, []);

  const cx = 300;
  const cy = 300;
  const radius = 200;

  return (
    <div className="mx-auto w-full max-w-[600px]" role="img" aria-label="Plexo ecosystem diagram showing eight app profiles radiating from the Plexo core">
      <svg
        ref={svgRef}
        viewBox="0 0 600 600"
        className="w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Connection lines */}
        {apps.map((app, i) => {
          const rad = (app.angle * Math.PI) / 180;
          const x = cx + radius * Math.cos(rad);
          const y = cy + radius * Math.sin(rad);
          return (
            <line
              key={`line-${i}`}
              data-line=""
              x1={cx}
              y1={cy}
              x2={x}
              y2={y}
              stroke="#3a3f4b"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          );
        })}

        {/* Plexo center */}
        <g data-center="">
          <circle cx={cx} cy={cy} r={48} fill="#22262e" stroke="#7eb8c9" strokeWidth="2" />
          <text
            x={cx}
            y={cy - 6}
            textAnchor="middle"
            className="fill-accent-500 font-[family-name:var(--font-mono)] text-[18px] font-bold"
          >
            Plexo
          </text>
          <text
            x={cx}
            y={cy + 14}
            textAnchor="middle"
            className="fill-base-500 font-[family-name:var(--font-mono)] text-[10px]"
          >
            Core
          </text>
        </g>

        {/* App nodes */}
        {apps.map((app, i) => {
          const rad = (app.angle * Math.PI) / 180;
          const x = cx + radius * Math.cos(rad);
          const y = cy + radius * Math.sin(rad);
          const color = statusColor[app.status];

          return (
            <g key={i} data-node="">
              <circle cx={x} cy={y} r={32} fill="#22262e" stroke={color} strokeWidth="1.5" />
              <text
                x={x}
                y={y + 1}
                textAnchor="middle"
                dominantBaseline="middle"
                className="font-[family-name:var(--font-mono)] text-[12px] font-medium"
                fill={color}
              >
                {app.name}
              </text>
            </g>
          );
        })}

        {/* Pulse ring on Plexo core */}
        <circle cx={cx} cy={cy} r={48} fill="none" stroke="#7eb8c9" strokeWidth="1" opacity="0.3">
          <animate
            attributeName="r"
            from="48"
            to="72"
            dur="3s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            from="0.3"
            to="0"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
}
