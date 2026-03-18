# Embedded Studio crashes on Netlify with Astro 6

## Suggested repository

- `sanity-io/sanity-astro`

## Suggested title

Embedded Studio on Netlify with Astro 6 fails at runtime with `NoMatchingRenderer` for `StudioComponent`

## Summary

Embedding Sanity Studio with `@sanity/astro` on an Astro 6 site deployed to Netlify fails at runtime on `/admin` with `NoMatchingRenderer` for `StudioComponent`.

This reproduces in a minimal app, so it does not appear to depend on application-specific code.

## Environment

- `astro`: `6.0.5`
- `@astrojs/netlify`: `7.0.3`
- `@astrojs/react`: `5.0.0`
- `@sanity/astro`: `3.3.1`
- `sanity`: `5.17.1`
- `@sanity/client`: `7.17.0`
- `react`: `19.2.4`
- `react-dom`: `19.2.4`

## Minimal reproduction

Reproduction app folder:

- `repro/sanity-astro-netlify`

Minimal config:

- Netlify adapter
- `sanity({ studioBasePath: '/admin' })`
- standard `react()` integration
- basic `sanity.config.ts`

## Expected behavior

Visiting `/admin` in production should load the embedded Sanity Studio.

## Actual behavior

Visiting `/admin` in production returns a Netlify function crash page.

## Runtime logs

```text
Mar 18, 09:34:15 AM: fda2d444 ERROR  Invoke Error 	{"errorType":"NoMatchingRenderer","errorMessage":"Unable to render `StudioComponent`.\n\nNo valid renderer was found for the `./opt/build/repo/node_modules/@sanity/astro/dist/studio/studio-component` file extension.","title":"No matching renderer found.","hint":"Did you mean to enable the `@astrojs/react`, `@astrojs/preact`, `@astrojs/solid-js`, `@astrojs/vue` or `@astrojs/svelte` integration?\n\nSee https://docs.astro.build/en/guides/framework-components/ for more information on how to install and configure integrations.","type":"AstroError","name":"NoMatchingRenderer","stack":["NoMatchingRenderer: Unable to render `StudioComponent`.","","No valid renderer was found for the `./opt/build/repo/node_modules/@sanity/astro/dist/studio/studio-component` file extension.","    at renderFrameworkComponent (file:///var/task/.netlify/build/chunks/ssr-function_WrCP9SzV.mjs:4581:15)"]}
Mar 18, 09:34:15 AM: fda2d444 ERROR  Unhandled Promise Rejection 	{"errorType":"Runtime.UnhandledPromiseRejection","errorMessage":"NoMatchingRenderer: Unable to render `StudioComponent`.\n\nNo valid renderer was found for the `./opt/build/repo/node_modules/@sanity/astro/dist/studio/studio-component` file extension.","reason":{"errorType":"NoMatchingRenderer","errorMessage":"Unable to render `StudioComponent`.\n\nNo valid renderer was found for the `./opt/build/repo/node_modules/@sanity/astro/dist/studio/studio-component` file extension.","title":"No matching renderer found.","hint":"Did you mean to enable the `@astrojs/react`, `@astrojs/preact`, `@astrojs/solid-js`, `@astrojs/vue` or `@astrojs/svelte` integration?\n\nSee https://docs.astro.build/en/guides/framework-components/ for more information on how to install and configure integrations.","type":"AstroError","name":"NoMatchingRenderer","stack":["NoMatchingRenderer: Unable to render `StudioComponent`.","","No valid renderer was found for the `./opt/build/repo/node_modules/@sanity/astro/dist/studio/studio-component` file extension.","    at renderFrameworkComponent (file:///var/task/.netlify/build/chunks/ssr-function_WrCP9SzV.mjs:4581:15)"]},"promise":{},"stack":["Runtime.UnhandledPromiseRejection: NoMatchingRenderer: Unable to render `StudioComponent`.","","No valid renderer was found for the `./opt/build/repo/node_modules/@sanity/astro/dist/studio/studio-component` file extension.","    at process.<anonymous> (file:///var/runtime/index.mjs:1448:17)","    at process.emit (node:events:519:28)","    at emitUnhandledRejection (node:internal/process/promises:252:13)","    at throwUnhandledRejectionsMode (node:internal/process/promises:388:19)","    at processPromiseRejections (node:internal/process/promises:475:17)","    at process.processTicksAndRejections (node:internal/process/task_queues:106:32)"]}
```

## Notes

- Local development works
- Build succeeds
- Deployment succeeds
- Failure is runtime-only in Netlify SSR
- Removing custom React include filters does not change the error
- The `InvalidStateTransition` log lines appear to be secondary Netlify runtime noise after the original unhandled exception

## Question

Is this a known incompatibility between embedded Studio in `@sanity/astro` and Astro 6 on Netlify SSR, or is there a supported workaround/configuration for packaged `StudioComponent` renderer resolution in production?
