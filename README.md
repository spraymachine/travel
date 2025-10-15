# Plusreisid OÜ – Travel site

## Local development

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

1. Create a GitHub repository and push this project to a `main` branch.
2. Set the Pages base path (repo name) so links work:
   - Settings → Secrets and variables → Actions → Variables → New variable
   - Name: `VITE_BASE` Value: `/<repo-name>/`
3. Enable Pages: Settings → Pages → Source: GitHub Actions
4. Push to `main`. The workflow at `.github/workflows/deploy.yml` will build and publish `dist`.

Notes:
- SPA fallback is handled by `public/404.html`.
- You can also set `base` directly in `vite.config.ts` by replacing `process.env.VITE_BASE` with `'/<repo-name>/'`.
