import vercel from '@sveltejs/adapter-vercel';
import preprocessor from 'svelte-preprocess';
import { cssModules } from 'svelte-preprocess-cssmodules';
import { asMarkupPreprocessor } from 'svelte-as-markup-preprocessor';

export default {
  //preprocess: preprocessor(),
  preprocess: [asMarkupPreprocessor([preprocessor()]), cssModules()],
  kit: {
    adapter: vercel({
      edge: false,
      external: [],
      split: false
    })
  }
};
