import * as path from 'path';
import { defineConfig } from "vite";

export default defineConfig({
    root: "./doc", resolve: {
        alias: [
            { find: '@ouikit', replacement: path.resolve(__dirname, 'packages') }
        ]
    },
    build: {
      outDir: "../doc-dist",
      emptyOutDir: true,
    },
});
