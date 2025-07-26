import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default function defineConfig(({ mode }) {
  if (mode === "production") {
    base: ""
  }
  plugins: [react()],
})
