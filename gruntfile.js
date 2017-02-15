module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                esversion: 6
            },
            all: ['Gruntfile.js', 'dhclient.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    //grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['jshint']);

};