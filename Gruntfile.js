module.exports = function(grunt) {

  grunt.initConfig({
	shell: {
	    gulp: {
	        command: '../../node_modules/.bin/gulp -t humanity',
	        execOptions: {
	          cwd: '../../'
	        }
	    }
	},
	copy: {
		dist: {
			files: [
				{expand: true, src: ['*'], cwd: 'fonts/', dest: '../../dist/fonts', filter: 'isFile'},
				{expand: true, src: ['*/**'], cwd: '../../dist/', dest: 'dist/'}

			]
		}
	},
    watch: {
      scripts: {
        files: ['*.less'],
        tasks: ['build'],
        options: {
          spawn: false,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['shell', 'copy']);

};
