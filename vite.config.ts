import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Daraida-Naujas/', // <- BŪTINA nurodyti tavo GitHub repo pavadinimą su /
});
