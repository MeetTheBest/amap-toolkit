import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig(({ command }) => {
    const isDev = command === 'serve';
    return {
        base: './',
        plugins: [
            vue(),
            dts({
                exclude: ['./demo'],
            }),
            !isDev &&
                visualizer({
                    gzipSize: true,
                    brotliSize: true,
                    emitFile: false,
                    filename: 'test.html', //分析图生成的文件名
                    open: true, //如果存在本地服务端口，将在打包后自动展示
                }),
        ],
        server: {
            host: '127.0.0.1',
            open: true,
        },
        ...(isDev
            ? {}
            : {
                  esbuild: {
                      drop: ['console'], // 删除 console.log
                  },
              }),
        build: {
            target: 'es2015',
            minify: true,
            lib: {
                entry: './src/main.ts',
                name: 'amap-toolkit',
                fileName: format => `amap-toolkit.${format}.js`,
            },
        },
    };
});
