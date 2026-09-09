# Association Environnement Parfait (AEP)

Site vitrine officiel de l'Association Environnement Parfait (AEP), une association
tchadienne engagée pour un environnement sain, la résilience climatique et la solidarité.
Basée à N'Djamena, Tchad.

- Site en ligne : https://AmjadAbubkr.github.io/Association-Environnement-Parfait/
- Stack : React 19 + Vite 7 + Tailwind CSS 4 + shadcn/ui + wouter
- Site 100 % statique (aucun backend) — déployé sur GitHub Pages.

## Développement

Prérequis : Node.js 20+ et npm.

```sh
npm install
npm run dev
```

## Vérifier et construire

```sh
npm run typecheck
npm run build
npm run preview
```

## Déploiement

Chaque push sur `main` déclenche le workflow `.github/workflows/deploy.yml`
qui construit le site (`dist/`) et le publie sur GitHub Pages.

> Note : le dépôt doit être **public** (ou GitHub Pro/Team) et la source Pages
> réglée sur **GitHub Actions** pour que l'URL ci-dessus fonctionne.
> La `base` Vite (`vite.config.ts`) correspond au sous-chemin du dépôt :
> `/Association-Environnement-Parfait/`.
