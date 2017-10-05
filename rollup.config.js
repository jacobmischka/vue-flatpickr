import babel from 'rollup-plugin-babel';
import vue from 'rollup-plugin-vue';

export default {
	input: './src/components/index.js',
	output: [
		{
			file: 'dist/index.cjs.js',
			format: 'cjs'
		},
		{
			file: 'dist/index.js',
			format: 'es'
		}
	],
	plugins: [
		vue(),
		babel({
			exclude: 'node_modules/**'
		})
	],
	external: [
		'flatpickr'
	]
}
