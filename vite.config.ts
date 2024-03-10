import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "components": "/src/components",
      "hooks": "/src/shared/hooks",
      "ui": "/src/shared/ui",
      "api": "/src/shared/api",
      "pages": "/src/pages",
      "types": "/src/shared/types",
    }
  }
})
