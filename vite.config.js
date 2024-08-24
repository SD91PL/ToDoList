import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import babel from 'vite-plugin-babel'

export default defineConfig({
	plugins: [
		react(
			babel({
				babelConfig: {
					presets: [
						[
							'@babel/preset-env',
							{
								targets: '> 0.25%, not dead',
							},
						],
						'@babel/preset-react',
					],
				},
			})
		),
	],
	build: {
		target: 'es2015',
	},
})
