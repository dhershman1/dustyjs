import resolve from 'rollup-plugin-node-resolve';

export default {
	input: 'src/index.js',
	onwarn: warning => {
		console.log(warning);
	},
	plugins: [
		resolve()
	],
	output: {
		name: 'DustyJS',
		format: 'umd',
		file: 'dist/dustyjs.umd.js'
	}
};
