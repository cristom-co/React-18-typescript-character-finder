import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { configDefaults } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  server: {
		watch: {
			usePolling: true,
		},
		host: true,
		strictPort: true,
		port: 5002,
	},

  test: {
    // 👋 add the line below to add jsdom to vite
    environment: "jsdom",
    // hey! 👋 over here
    globals: true,
    setupFiles: "tests/setup.ts", // assuming the test folder is in the root of our project
    coverage: {
      enabled: true,
      reporter: ["text", "json", "html"],
      exclude:[
        ...configDefaults.exclude, 
        'src/store/*',
        'src/routes/*',
        'src/graphql/*',
        'tests/*',
        '.eslintrc.cjs',
        'postcss.config.js',
        'tailwind.config.js'
      ]
    },
  },
});
