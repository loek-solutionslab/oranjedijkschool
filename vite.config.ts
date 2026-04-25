import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        onzeSchool: resolve(__dirname, 'pages/onze-school.html'),
        docenten: resolve(__dirname, 'pages/docenten.html'),
        lesinhoud: resolve(__dirname, 'pages/lesinhoud.html'),
        locaties: resolve(__dirname, 'pages/locaties.html'),
        voorOuders: resolve(__dirname, 'pages/voor-ouders.html'),
        contact: resolve(__dirname, 'pages/contact.html'),
        solutionslab: resolve(__dirname, 'pages/solutionslab.html'),
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  preview: {
    host: '0.0.0.0',
    port: 5173,
  },
})
