exports.task = {
	my_target: {
		files: [{
			expand: true,
			cwd: '../app/css/',
			src: [ '*.css', '!*.min.css' ],
			dest: '../app/css/',
			ext: '.min.css'
		}]
	}
};