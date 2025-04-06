import { defineConfig } from 'vitest/config';
import jsconfigPaths from 'vite-jsconfig-paths';

export default defineConfig({
  plugins: [
    jsconfigPaths()
  ],
});
