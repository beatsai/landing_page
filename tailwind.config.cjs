/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'red': '#DC143C'
		},
		backgroundImage: {
			'background-anime': "url('/background.webp')"
		},
		extend: {},
	},
	plugins: [],
}
