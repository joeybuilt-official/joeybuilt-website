export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-[family-name:var(--font-mono)] font-medium tracking-tight ${className}`}
    >
      <span className="text-base-400">_</span>
      <span className="text-accent-500">joey</span>
      <span className="text-base-200">built</span>
    </span>
  );
}

export function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-[family-name:var(--font-mono)] font-medium ${className}`}
    >
      <span className="text-base-300">[</span>
      <span className="text-accent-500">j</span>
      <span className="text-base-300">]</span>
    </span>
  );
}
