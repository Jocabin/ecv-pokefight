/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/svelte-ux/**/*.{svelte,js}'],
	theme: {
		extend: {
			colors: {
				accent: 'var(--accent)'
			},
		}
	},
	plugins: [require('svelte-ux/plugins/tailwind.cjs')]};

