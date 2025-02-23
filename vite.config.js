import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.woff', '**/*.ttf'],
  base: '/portfolio/', // GitHub repo name
});
