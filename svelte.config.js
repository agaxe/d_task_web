import { vitePreprocess } from '@sveltejs/kit/vite';
import vercel from '@sveltejs/adapter-vercel';
import { asMarkupPreprocessor } from 'svelte-as-markup-preprocessor';
import preprocessor from 'svelte-preprocess';
import { cssModules } from 'svelte-preprocess-cssmodules';

/** @type {import('@sveltejs/kit').Config} */
export default {
  //preprocess: preprocessor(),
  preprocess: [
    vitePreprocess(),
    asMarkupPreprocessor([preprocessor()]),
    cssModules()
  ],
  kit: {
    adapter: vercel({
      edge: false,
      external: [],
      split: false
    })
  }
};
