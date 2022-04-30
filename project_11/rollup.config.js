import pkg from './package.json'

const banner = `/*! ${pkg.name} | Version: ${pkg.version} */`;

const formats = ['iife', 'es', 'cjs'];

export default formats.map((format) => {
	return {
		input: './js/time.js',
		output: {
			file: `time${format === 'iife'?'':`.${format}`}.js`,
			format: format,
			banner: banner,
			name: 'Time',
			exports: 'auto'
		}
	};
});