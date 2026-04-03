const projects = [
  {
    name: "EPlusTV",
    description:
      "Virtual linear channels for ESPN, ESPN+, NFL+, MLB.tv, FOX Sports, and more. Built in TypeScript, Dockerized, active community.",
    href: "https://github.com/m0ngr31/EPlusTV",
  },
  {
    name: "DailyNotes",
    description: "App for taking notes and tracking tasks on a daily basis.",
    href: "https://github.com/m0ngr31/DailyNotes",
  },
  {
    name: "jellypod",
    description:
      "Docker app integrating Jellyfin and Audiobookshelf for music, podcast, and audiobook sync to iPod.",
    href: "https://github.com/m0ngr31/jellypod",
  },
  {
    name: "genmon",
    description: "Dockerized generator monitor.",
    href: "https://github.com/m0ngr31/genmon",
  },
  {
    name: "kodi-music-proxy",
    description:
      "HTTPS proxy for playing local Kodi files on Amazon Alexa.",
    href: "https://github.com/m0ngr31/kodi-music-proxy",
  },
  {
    name: "sub-archive",
    description: "Webapp for browsing archived versions of subreddits.",
    href: "https://github.com/m0ngr31/sub-archive",
  },
];

export function JoeDedication() {
  return (
    <section className="border-t border-base-800/20 bg-base-950">
      <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-base-600">
          For Joe
        </p>

        <div className="mt-10 space-y-5 text-base-300">
          <p>
            Joseph &ldquo;Joe&rdquo; Ipsen was a self-taught engineer. He built
            things that mattered to real people &mdash; projects with active
            communities, built with TypeScript, care for the user experience. He
            worked from home so he could be present with his kids. He was
            Dustin&apos;s brother-in-law and his best friend.
          </p>
          <p>He died at 38.</p>
          <p>
            Joeybuilt carries his name because the things he valued &mdash;
            craft, presence, building things that last &mdash; are the things
            this company is built to prove are still possible.
          </p>
        </div>

        {/* His work */}
        <div className="mt-16">
          <p className="mb-6 text-sm text-base-500">
            He shipped real things. The work speaks for itself.
          </p>

          <div className="space-y-4">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg border border-base-800/40 px-5 py-4 transition-colors hover:border-base-700/60"
              >
                <span className="font-[family-name:var(--font-mono)] text-sm font-medium text-base-200">
                  {project.name}
                </span>
                <span className="mt-1 block text-sm text-base-500">
                  {project.description}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-8 space-y-3 text-sm text-base-500">
            <p>
              <a
                href="https://github.com/m0ngr31"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base-400 hover:text-base-200"
              >
                github.com/m0ngr31
              </a>
            </p>
            <p>
              Joe also published and maintained Docker templates for the Unraid
              community &mdash; EPlusTV, DailyNotes, Genmon, OpenRA Server,
              ollama, ollama-webui, ComfyUI, Refact, Tabby, Stable Diffusion,
              and more.{" "}
              <a
                href="https://forums.unraid.net/topic/149018-support-m0ngr31-dockers/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base-400 hover:text-base-200"
              >
                Unraid support thread
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
