import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

const projectId = process.env.SANITY_STUDIO_API_PROJECT_ID
const dataset = process.env.SANITY_STUDIO_API_DATASET

export default defineConfig({
  name: 'default',
  title: 'Portfolio',

  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
