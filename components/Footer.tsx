import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-base-800/60 bg-base-950">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo className="text-lg" />
            <p className="mt-3 text-sm text-base-500">
              One person. Eight products.
              <br />
              One backbone.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-[family-name:var(--font-mono)] text-xs font-medium uppercase tracking-widest text-base-500">
              Products
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                ["Plexo", "https://getplexo.com"],
                ["Fylo", "https://myfylo.com"],
                ["Levio", "https://mylevio.com"],
                ["Pushd", "https://pushd.sh"],
                ["Koforje", "https://koforje.com"],
              ].map(([name, href]) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base-400 transition-colors hover:text-base-100"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-[family-name:var(--font-mono)] text-xs font-medium uppercase tracking-widest text-base-500">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                ["About", "/about"],
                ["Open Source", "/open-source"],
                ["Blog", "/blog"],
              ].map(([name, href]) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="text-base-400 transition-colors hover:text-base-100"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-[family-name:var(--font-mono)] text-xs font-medium uppercase tracking-widest text-base-500">
              Connect
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/joeybuilt-official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base-400 transition-colors hover:text-base-100"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-base-800/40 pt-8 text-center text-xs text-base-600">
          &copy; {new Date().getFullYear()} Joeybuilt LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
