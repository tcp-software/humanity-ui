module.exports = function(grunt) {

  grunt.initConfig({
	shell: {
	    gulp: {
	        command: '../../node_modules/.bin/gulp',
	        execOptions: {
	          cwd: '../../'
	        }
	    }
	}
  });

  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('build', ['shell']);

};
