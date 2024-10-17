import { defineConfig } from "cypress";

export default defineConfig({
  
  e2e: {
    baseUrl: 'http://localhost:51502',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        log(message) {
          console.log(message)

          return null
        },
      })
    },
  },

  
});
