import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts'

export default defineConfig(({ command }) => {
    const isDev = command === 'serve';
    return {
        base: './',
        plugins: [
            vue(),
            dts({
                exclude: ['./demo']
            })
        ],
        server: {
            host: '127.0.0.1',
            open: true
        },
        ...(
            isDev
                ? {}
                : {
                    esbuild: {
                        drop: ['console'], // 删除 console.log
                    }
                }
        ),
        build: {
            target: "es2015",
            minify: true,
            lib: {
                entry: './src/main.ts',
                name: 'amap-toolkit',
                fileName: (format) => `amap-toolkit.${format}.js`
            }
        }
    }
});
