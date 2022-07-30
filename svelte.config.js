import vercel from '@sveltejs/adapter-vercel';
import preprocessor from 'svelte-preprocess';

export default {
  preprocess: preprocessor(),
  kit: {
    adapter: vercel({
      edge: false,
      external: [],
      split: false
    })
  }
};
