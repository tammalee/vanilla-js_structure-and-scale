import pkg from './package.json'
import { terser } from 'rollup-plugin-terser';

const banner = `/*! ${pkg.name} | Version: ${pkg.version} */`;

const files = ['home.js', 'place.js'];

// Enable/disable minification
const minify = true;

export default files.map((file) => {
	return {
		input: `src/${file}`,
		output: {
			file: file,
			format: 'iife',
            banner: banner,
            plugins: minify ? [terser()] : null,
		    sourcemap: minify
		}
	};
});