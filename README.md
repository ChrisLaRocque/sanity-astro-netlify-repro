# Sanity Astro Netlify Repro

Minimal reproduction for an embedded Sanity Studio failing on Netlify with:

- Astro 6
- `@astrojs/netlify`
- `@astrojs/react`
- `@sanity/astro`

## Reproduced issue

Expected:

- `/admin` loads the embedded Sanity Studio

Actual:

- `/admin` crashes in Netlify SSR
- Netlify logs show `NoMatchingRenderer` for `StudioComponent`

## Versions under test

- `astro`: `6.0.5`
- `@astrojs/netlify`: `7.0.3`
- `@astrojs/react`: `5.0.0`
- `@sanity/astro`: `3.3.1`
- `sanity`: `5.17.1`
- `@sanity/client`: `7.17.0`
- `react`: `19.2.4`
- `react-dom`: `19.2.4`

## Local development

```bash
npm install
npm run dev
```

Open:

- `/`
- `/admin`

## Netlify deploy

This repo includes a `netlify.toml`, so a plain Netlify deploy should work.

If configuring manually:

- Build command: `npm run build`
- Publish directory: `dist`

## Open issue draft

See `UPSTREAM_ISSUE.md` for the ready-to-file issue text.

## Publish this folder as a standalone repo

If this folder currently lives inside another repo, copy it out and publish it separately:

```bash
cp -R repro/sanity-astro-netlify ../sanity-astro-netlify-repro
cd ../sanity-astro-netlify-repro
git init
git add .
git commit -m "Add minimal repro for embedded Sanity Studio Netlify crash"
```

Then create a new GitHub repo and push:

```bash
git branch -M main
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```
