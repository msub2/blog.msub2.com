import adapter from '@sveltejs/adapter-static';
import svg from '@poppanator/sveltekit-svg';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			default: false
		},
		trailingSlash: 'always',
		vite: {
      plugins: [svg()]
    }
	},
	extensions: ['.svelte', '.md'],
	preprocess: [
		mdsvex({
			extensions: ['.md'],
			layout: {
				posts: 'src/routes/posts/_post.svelte'
			}
		})
	]
};

export default config;
