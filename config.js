'use strict';

var fs = require("fs");

module.exports = {

  autoTest: true,

  // Server
  server: {
    ghostMode: {
      clicks: false,
      location: false,
      forms: false,
      scroll: false
    }
  },

  // Htmlhint
  htmlhint: '.htmlhintrc',

  // Jade
  jade: {
    options: {
      pretty: true
    },
    data: '../src/jade.json'
  },

  // Style
  style: {
    sass: {
      options: {
        errLogToConsole: true,
        sourceComments: 'normal',
        sourceMap: false,
        compass: true,
        precision: 10,
        style: 'compressed'
      }
    },
    autoprefixer: {
      browsers: ['last 3 version', 'ie >= 9', 'Android 4.0'],
      ignore: []
    },
    mqpacker: {}
  },

  // Karma
  karma: {
    conf: 'karma.conf.js'
  },

  // Nightwatch
  nightwatch: {
    conf: 'nightwatch.json'
  },

  // Imagemin
  imagemin: {
    options: {
      progressive: true,
      interlaced: true
    }
  },

  // path
  path: {
    html: {
      src: ['dist/**/*.html', '!dist/lib/**/*']
    },
    jade: {
      watch: ['src/**/*.jade', 'src/**/*.html', '!src/lib/**/*'],
      src: ['src/**/*.jade', '!src/**/_*.jade', '!src/lib/**/*'],
      dest: 'dist/'
    },
    sass: {
      src: ['src/sass/**/*.scss', '!src/lib/**/*'],
      dest: 'dist/css'
    },
    coffee: {
      watch: ['src/**/*.coffee', '!src/lib/**/*'],
      src: ['src/**/*.coffee','!src/**/_*.coffee', '!src/lib/**/*'],
      dest: 'src/'
    },
    js: { // for [js_hint, compile]
      watch: 'src/**/*.js',
      src: ['src/js/*.js','!src/js/_*.js', '!src/lib/**/*'],
      dest: 'dist/js'
    },
    images: { // for image min
      src: 'src/images/**/*',
      dest: 'dist/images'
    },
    test: {
      src: [
        'dist/js/*.js',
        'src/js/test/*.js'
      ]
    },
    copy: {
      init: [
        {
          from: 'src/lib/**/*',
          to: 'dist/lib'
        },
        {
          from: 'src/*.html',
          to: 'dist/'
        }
      ],
      js: {
        from: 'src/js/page/*.js',
        to: 'dist/js/'
      }
    }
  }
};
