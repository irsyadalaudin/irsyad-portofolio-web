/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			spacing: {
				'13': '3.28rem',
				'5': '1.11rem',
				'13.3': '3.1rem'
			}
		},
	},
	plugins: [],
}

