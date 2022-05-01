import adapter from '@sveltejs/adapter-static';
import svg from '@poppanator/sveltekit-svg';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			default: true
		},
		trailingSlash: 'always',
		vite: {
      plugins: [svg()]
    }
	}
};

export default config;
