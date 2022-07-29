import vercel from '@sveltejs/adapter-vercel';
import preprocessor from 'svelte-preprocess';

export default {
  preprocess: preprocessor({
    scss: {
      prependData: `@import './src/style/global.scss';`
    }
  }),
  kit: {
    adapter: vercel({
      edge: false,
      external: [],
      split: false
    })
  }
};
