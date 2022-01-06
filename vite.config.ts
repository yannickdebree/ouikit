import * as path from 'path';
import { defineConfig } from "vite";

export default defineConfig({
    root: "./docs-src", resolve: {
        alias: [
            { find: '@ouikit', replacement: path.resolve(__dirname, 'packages') }
        ]
    },
    build: {
        outDir: "../docs",
      emptyOutDir: true,
    },
});
