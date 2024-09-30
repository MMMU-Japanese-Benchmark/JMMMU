import { defineConfig } from '@farmfe/core';
import path from 'path';

export default defineConfig({
  plugins: ['@farmfe/plugin-react'],
  compilation: {
    output: {
      publicPath: '/JMMMU/',
    },
    resolve: {
      alias: {
        '/@': path.resolve(__dirname, './src'),
      },
    },
  },
});
