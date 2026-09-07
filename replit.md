# Association Environnement Parfait

Site vitrine officiel de l'Association Environnement Parfait (AEP), une association tchadienne engagée pour un environnement sain, la résilience climatique et la solidarité.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/aep-website/src/App.tsx` — page institutionnelle, navigation, sections et interactions locales
- `artifacts/aep-website/src/index.css` — tokens visuels, typographie, responsive et animations
- `artifacts/aep-website/public/aep-logo.jpg` — logo officiel fourni par l'association
- `artifacts/aep-website/index.html` — métadonnées SEO et chargement des polices

## Architecture decisions

- Le site est une page vitrine frontend-only : les CTA utilisent des ancres et un lien e-mail plutôt qu'un backend fictif.
- Les contenus sont issus du profil institutionnel AEP ; aucun chiffre d'impact non fourni n'est affiché.
- La direction visuelle privilégie le récit éditorial, les photographies de nature et une palette forêt/ivoire/ocre inspirée du logo.
- Les informations de contact et d'inscription à la newsletter sont présentées avec un retour d'interface local, prêtes à être reliées à un service ultérieurement.

## Product

La page présente l'identité de l'AEP, sa mission, son historique, ses domaines d'intervention, ses partenaires et un parcours de prise de contact pour volontaires et organisations.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
