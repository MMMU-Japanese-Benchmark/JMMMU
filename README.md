# JMMMU
The official repository for the website scripts of "JMMMU: A Japanese Massive Multi-discipline Multimodal Understanding Benchmark"

## Usage
```sh
cd github_pages
npm install -g pnpm  # Install pnpm globally
pnpm install         # Install project dependencies
pnpm run dev         # Start the development server
pnpm run format      # Format the project files
```

## Customize
You can modify the contents of the following files and directories to suit your needs:
- [github_pages/index.html](./github_pages/index.html)
- [github_pages/src/](./github_pages/src/)

To change the path segment, update the publicPath field in the configuration file [github_pages/farm.config.ts](./github_pages/farm.config.ts) as follows:
```ts
import { defineConfig } from '@farmfe/core';
import path from 'path';

export default defineConfig({
  plugins: ['@farmfe/plugin-react'],
  compilation: {
    output: {
      publicPath: '/JMMMU/', // Change this to your desired path segment
    },
    resolve: {
      alias: {
        '/@': path.resolve(__dirname, './src'),
      },
    },
  },
});
```
