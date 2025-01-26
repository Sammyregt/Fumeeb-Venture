<<<<<<< HEAD
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
=======
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
>>>>>>> d30b5657f5e8286e8bb5aad29002516481a7dcb7
		proxy: {
			"/api": {
				target: "http://localhost:5000",
			},
		},
	},
<<<<<<< HEAD
})
=======
});
>>>>>>> d30b5657f5e8286e8bb5aad29002516481a7dcb7
