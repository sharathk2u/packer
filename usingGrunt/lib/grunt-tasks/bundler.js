module.exports = function( grunt ) {
	grunt.initConfig({
		watch: {
			files: '../../app/sass/*.scss',
			tasks: [ 'sass', 'cssmin' ]
		},
		sass: require( '../sass' ).task,
		cssmin: require( '../cssmin' ).task,
		exsass: {
			dist: {
				options: {
					style: 'expanded',
					lineNumbers: true,
					sourcemap: 'none'
				},
				files: {
					'../../app/css/example.css': '../../app/sass/example.scss'
				}
			}
		}
	});

	// watches the files ending with .scss within the directory "app/sass"
	grunt.loadNpmTasks('grunt-contrib-watch');

	// executes the files ending with .scss within the directory "app/sass" and pushes the "css" files generated to directory "app/css"
	grunt.loadNpmTasks('grunt-contrib-sass');

	// minifies the files ending with .css within the directory "app/css"
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default', ['exsass']);
}
