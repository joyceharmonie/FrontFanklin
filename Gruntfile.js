'use strict';
module.exports = function (grunt){
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({
    project: {
      src: 'src',
      dist: 'dist',
    },
    copy: {
      index: {
        expand: true,
        cwd: '<%= project.src %>',
        src: ['index.html'],
        dest: '<%= project.dist %>',
      },
      images: {
        expand: true,
        cwd: '<%= project.src %>/img',
        src: ['**'],
        dest: '<%= project.dist %>/img',
      },
      fonts: {
        expand: true,
        cwd: '<%= project.src %>/vendor/bootstrap/fonts',
        src: ['**'],
        dest: '<%= project.dist %>/fonts',
      },
    },
    clean: {
      dist: {
        src: [
          '<%= project.dist %>/**',
          '.tmp',
        ],
      },
      tmp : {
        src : [
          '.tmp',
        ],
      },
    },
    includeSource: {
      options:{
        basePath: '<%= project.src %>',
        baseUrl: '',
      },
      index: {
        files:{
          '<%= project.src %>/index.html' : '<%= project.src %>/index.src',
        },
      },
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc',
        ignore: [],
      },
      all: [
        'Gruntfile.js',
        '<%= project.src %>/app/{,**/}*.js',
      ]
    },

    html2js: {
      options: {
        base: '<%= project.src %>',
        module: 'templates.cache',
        quoteChar: '\'',
        useStrict: true,
        singleModule: true,
        htmlmin: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          removeComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        },
      },
      app: {
        src: ['<%= project.src %>/app/views/{,**/}*.html'],
        dest: '<%= project.src %>/app/views/templates.cache.js',
      },
    },

    useminPrepare: {
      html: '<%= project.src %>/index.html',
      options: {
        src: '<%= project.src %>',
        dest: '<%= project.dist %>',
      },
    },

    usemin: {
      html: '<%= project.dist %>/index.html',
      css: '<%= project.dist %>/{,**/}*.css',
    },
    cssmin: {
      options: {
        keepSpecialComments: 0,
      }
    },

    uglify: {
      options: {
        compress: {
          drop_console: true,
        },
      },
    },
    ngAnnotate: {
      options: {
        singleQuotes: true,
      },
      dist: {
        files: [
          {
            expand: true,
            src: [
              '.tmp/concat/js/app.min.js'
            ]
          }  ]
        }

      },
      watch : {
        dev: {
          options: {
            livereload: true,
          },
          files: [
            '<%= project.src %>/{,**/}*',
            '!<%= project.src %>/index.html',
            '!<%= project.src %>/app/views/templates.cache.js',
            '<%= project.src %>/vendor/{,**/}*'
          ],
          tasks: '<%= tasks.dev %>',
        }
      },

      tasks: {
        dev: [
          'jshint',
          'html2js',
          'includeSource',
        ],
        dist: [
          'clean',
          'html2js',
          'jshint',
          'includeSource',
          'copy',
          'useminPrepare',
          'concat',
          'ngAnnotate',
          'cssmin',
          'uglify',
          'usemin',
          'clean:tmp',
        ]
      }
    });
    grunt.registerTask('dev', function(){
      grunt.task.run(grunt.config.get('tasks').dev);
    });
    grunt.registerTask('wdev', function(){
      grunt.task.run(grunt.config.get('tasks').dev);
      grunt.task.run(['watch:dev']);
    });
    grunt.registerTask('dist', function(){
      grunt.task.run(grunt.config.get('tasks').dist);
    });
  };
