exports.task = {
	dist: {
		options: {
			style: 'expanded',
			lineNumbers: true,
			sourcemap: 'none'
		},
		files: [{
			expand: true,
			cwd: '../app/sass/',
			src: [ '*.scss' ],
			dest: '../app/css/',
			ext: '.css'
		}]
	}
};
