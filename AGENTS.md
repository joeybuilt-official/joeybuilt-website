# Joeybuilt Website — AGENTS.md

## Pre-Flight Audit

- **Existing repo:** None found in `joeybuilt-official` org. Fresh scaffold.
- **Deploy target:** Joeybuilt Pushd infra stack on VPS 15.204.88.123. Traefik labels for `joeybuilt.com`. Not Coolify (shut down in Phase 11 of VPS migration).
- **DNS:** `joeybuilt.com` A record already points to 15.204.88.123.

## Architecture Decisions

- **Framework:** Next.js 16 App Router, TypeScript strict, Tailwind v4
- **Output:** `standalone` for Docker deployment
- **No database, auth, or server-side data** — pure SSG
- **Brand identity:** Monospace code aesthetic. `_joeybuilt` wordmark with `[j]` icon. Muted teal accent (#7eb8c9) on dark slate (#1a1d24). JetBrains Mono for display/mono, DM Sans for body.
- **Ecosystem diagram:** SVG with staggered entrance animation. Plexo core center, 8 App Profiles radiating outward with status-coded colors.

## Deploy

Add `joeybuilt-website` service to `/opt/joeybuilt-ops/pushd/infra/docker-compose.prod.yml`:

```yaml
joeybuilt-website:
  container_name: joeybuilt-website
  build:
    context: /opt/joeybuilt-ops/joeybuilt-website
    dockerfile: Dockerfile
  restart: unless-stopped
  labels:
    - "traefik.enable=true"
    - "traefik.http.routers.joeybuilt-web.rule=Host(`joeybuilt.com`) || Host(`www.joeybuilt.com`)"
    - "traefik.http.routers.joeybuilt-web.entrypoints=https"
    - "traefik.http.routers.joeybuilt-web.tls=true"
    - "traefik.http.routers.joeybuilt-web.tls.certresolver=letsencrypt"
    - "traefik.http.services.joeybuilt-web.loadbalancer.server.port=3000"
    - "traefik.docker.network=coolify"
  networks:
    - coolify
    - default
```

## Push Target

- Branch: `main`
- Repo: `joeybuilt-official/joeybuilt-website`
