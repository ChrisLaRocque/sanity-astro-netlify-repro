import netlify from '@astrojs/netlify'
import react from '@astrojs/react'
import sanity from '@sanity/astro'
import { defineConfig } from 'astro/config'

export default defineConfig({
  integrations: [
    sanity({
      projectId: 'vs47sslu',
      dataset: 'production',
      useCdn: false,
      apiVersion: '2025-01-28',
      studioBasePath: '/admin',
    }),
    react(),
  ],
  adapter: netlify(),
})
