module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    concat: {
      dist: {
        src: ["src/*.js"],
        dest: "build/commons.js"
      }
    },
    jshint: {
      files: ["<%= concat.dist.src %>"],
      options: {
        globals: {
          jQuery: true,
          console: true
        }
      }
    },
    uglify: {
      build: {
        src: "<%= concat.dist.dest %>",
        dest: "build/commons.min.js"
      }
    },
    watch: {
      files: ["<%= concat.dist.src %>"],
      tasks: ["jshint", "concat", "uglify"]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["jshint", "concat", "uglify"]);
};
