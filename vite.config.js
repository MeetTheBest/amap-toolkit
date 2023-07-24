import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    base: './',
    plugins: [
        vue()
    ],
    server: {
        open: true
    },
    build: {
        lib: {
            entry: './src/main.ts',
            name: 'gaode-tools',
            fileName: (format) => `gaode-tools.${format}.js`
        }
    }
});
