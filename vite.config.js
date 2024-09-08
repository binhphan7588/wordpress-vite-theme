import { defineConfig } from "vite";
import liveReload from "vite-plugin-live-reload";
import { resolve } from 'path'

export default defineConfig({
    base: process.env.NODE_ENV === 'development' ? '/' : '/wp-content/themes/vite-press/assets',
    // base: '/',
    plugins: [
        liveReload(__dirname + '/**/*.php')
    ],
    build: {
        outDir: resolve(__dirname, './assets'),
        assetsDir: './',
        emptyOutDir: false,
        rollupOptions: {
            input: {
                lib: resolve(__dirname, './assets/sass/lib/tailwind.css'),
                style: resolve(__dirname, './assets/sass/style.scss')
            },
            output: {
                assetFileNames: (assetInfo) => {
                    const extensionFile = assetInfo.name.match(/\.[a-z]+$/i)[0];

                    if (extensionFile == '.css')
                        return 'css/[name].[ext]';

                    if (assetInfo.originalFileName) {
                        let path = assetInfo.originalFileName.match(/([^assets\/])(.*)([\/])/g)[0]
                        return path + assetInfo.name;
                    }

                    return assetInfo.name;
                },
            }
        }
    },
    server: {
        cors: true,
        https: false,
        strictPort: true,
        port: 5173,
        hmr: {
            host: 'localhost'
        },
        origin: 'http://vite-press.test/wp-content/themes/vite-press'
    },
})