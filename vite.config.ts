import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import TsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), TsconfigPaths()]
})
