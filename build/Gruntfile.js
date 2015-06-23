module.exports = function(grunt) {
	var path = require('path');

	var workDir = '../';
	var srcDir = path.resolve(workDir, './src/');
	var destDir = path.resolve(workDir, './dist/');

	grunt.initConfig({
		requirejs: {
			shadow: {
				options: {
					baseUrl: srcDir,
					name: 'js/index',
					mainConfigFile: './requirejs-config.js',
					optimize: 'uglify',
					findNestedDependencies: true,
					preserveLicenseComments: false,
					exclude: ['text'],
					out: path.resolve(destDir, 'js/index.js')
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-requirejs');

	grunt.registerTask('rjs', ['requirejs']);

	grunt.registerTask('default', ['rjs']);
}
