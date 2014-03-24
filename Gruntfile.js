module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        jasmine: {
            build: {
                src: 'src/**/*.js',
                options: {
                    specs: 'test/*Spec.js',
                }
            }
        },

        uglify: {
            build: {
                src: 'src/bookmarklet.js',
                dest: 'build/bookmarklet.min.js'
            }
        }
    });

    //load plugins
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //define tasks
    grunt.registerTask('default', ['jasmine', 'uglify']);

};