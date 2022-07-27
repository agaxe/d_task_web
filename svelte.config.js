//import adapter from '@sveltejs/adapter-node';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		//adapter: adapter(),
		//adapter: adapter({ out: 'my-output-directory' }),
		adapter: adapter({
			fallback: 'index.html'
		}),
		prerender: {
			default: true
		}
	}
};

export default config;
