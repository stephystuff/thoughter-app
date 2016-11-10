module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    // all of our TASK configuration goes in here
      clean: ['build/'],

      jshint: { //the task name is defined by plugin
          options: {
            jshintrc: '.jshintrc',
            ignores: ['node_modules/**']
          },
          source: { //this target name is arbitrary! you can make it whatever you want it to be
            files:{
                src:['src/js/**/*.js']
            }

          },
          test: {
            files: {
                src: ['test/specs/**/*.js']
            }
          }
      },

      sass: {//task name
        allStyles: { //target name
          files: {
            'build/css/styles.css': 'src/sass/main.scss'
          }
        }
      },

      copy: {//task name
          html: {
              files: [
                {
                  expand: true,
                  cwd: 'src/',
                  src: ['index.html'],
                  dest: 'build/'
                }

              ]
          },
          vendors: {
              files: [
                {
                  expand: true,
                  cwd: 'node_module/jquery/dist',
                  src: ['jquery.js'],
                  dest: 'build/js/'
                }
              ]
          }
      },

      concat: {
          js: {
            src: ['src/js/**/*.js'],
            dest: 'build/js/app.js'

          }
      },

      connect: {
          testing: {
            options: {
              port: 8888,
              base: '.'
            }
          }
      },

      mocha: {
          all: {
            options: {
              urls: [
                'http://localhost:8888/test/thoughter.html'
              ]
            }
          }
      }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-mocha');




  grunt.registerTask('test', ['jshint', 'connect', 'mocha']);
  grunt.registerTask('default', ['clean', 'test', 'sass', 'copy', 'concat']);

};
