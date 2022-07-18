import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:6006',
  },
  viewportWidth: 1440,
  viewportHeight: 1200,
})
