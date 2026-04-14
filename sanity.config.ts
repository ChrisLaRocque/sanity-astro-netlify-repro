import { defineField, defineType, defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

export default defineConfig({
  name: 'default',
  title: 'Sanity Astro Netlify Repro',
  projectId: 'd4pq1c3l',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: [
      defineType({
        name: 'note',
        title: 'Note',
        type: 'document',
        fields: [
          defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
          }),
        ],
      }),
    ],
  },
})
