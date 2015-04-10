/**
 * Created by luiseduardobrito on 1/9/15.
 */
module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        options: {
          paths: ['public/assets/less']
        },
        files: {
          'public/dist/style.css': 'public/assets/less/**.less'
        }
      }
    },
    cssmin: {
      target: {
        files: {
          'public/dist/style.min.css': ['public/dist/style.css']
        }
      }
    },
    clean: ["public/assets/dist/"],
    watch: {
      files: ['public/app/**', 'public/assets/**', 'public/assets/**', 'public/index.html'],
      tasks: ['dev']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('dev', ['clean', 'less', 'cssmin']);
  grunt.registerTask('default', ['dev']);
};