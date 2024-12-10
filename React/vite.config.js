// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // 원하는 포트를 고정
    strictPort: true, // 다른 포트를 사용하지 않도록 강제
  },
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, "src/index.jsx"), // 진입점을 index.jsx로 설정
    },
  },
});


