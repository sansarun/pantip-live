module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        karma: {
          unit: {
            configFile: 'karma.conf.js',
            singleRun: true
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
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //define tasks
    grunt.registerTask('default', ['karma:unit', 'uglify']);

};