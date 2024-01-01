import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	extensions: ['.svelte', '.md'],
	preprocess: [
		mdsvex({
			extensions: ['.md'],
			layout: {
				posts: dirname(fileURLToPath(import.meta.url)) + '/src/routes/posts/_post.svelte'
			}
		})
	]
};

export default config;
