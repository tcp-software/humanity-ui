module.exports = function(grunt) {

  grunt.initConfig({
	shell: {
	    gulp: {
	        command: '../../node_modules/.bin/gulp',
	        execOptions: {
	          cwd: '../../'
	        }
	    }
	},
	copy: {
		dist: {
			files: [
				{expand: true, src: ['*'], cwd: 'fonts/', dest: '../../dist/fonts', filter: 'isFile'},
				{expand: true, src: ['**'], cwd: '../../dist/', dest: 'dist/'}

			]
		}
	}
  });

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('build', ['shell', 'copy']);

};
