'use strict';

/**
 * reactgulp
 * @param -dev has minify stop
 */

/**
 * prepare
 */
const gulp        = require('gulp'),
      config      = require('./config'),
      $           = require('gulp-load-plugins')({
                      pattern: ['gulp-*', 'gulp.*'],
                      replaceString: /\bgulp[\-.]/
      });
$.browser         = require('browser-sync');
const runSequence = require('run-sequence'),
      extend      = require('extend'),
      pkg         = require('./package.json');
const DEFAULT_OPTIONS = {
  min : true,
  dev : false,
  port: 3000
};
const OPTIONS = parseOption(process.argv);
if (OPTIONS.dev) {
  OPTIONS.min = false;
}
console.log("current options: ");
console.dir(OPTIONS);

function parseOption(argv) {
  const options = extend({}, DEFAULT_OPTIONS);
  let i, match, key, value;
  for(i = 0; i < argv.length; i++) {
    if (argv[i].charAt(0) === '-') {
      match        = argv[i].substring(1).split('=');
      key          = match[0];
      value        = match[1] || true;
      options[key] = value;
    }
  }
  return options;
}

/**
 * these function is for get src/dist path
 * !path is excluding directory
 * @param name
 * @param prop
 * @returns path
 */
function getPath(name, prop) {
  prop = prop || 'src';
  if (!config.path[name] || !config.path[name][prop]) {
    return console.log('[ERROR] not found path - ' + name + '.' + prop);
  }
  return config.path[name][prop];
}

// set global
global.reactgulp = {
  plugins : $,
  config  : config,
  getPath : getPath,
  option  : OPTIONS,
  pkg     : pkg
};

// load task from gulp's load
require('./gulp/_load');

// tasks
gulp.task('e2e', ['default', 'webtest'], () => {});
gulp.task('default', ['server', 'watch', 'script:watch', 'test:watch'], () => {});

gulp.task('init', ['clean'], (callback) => {
  return runSequence(
    ['copy', 'jade', 'style'],
    'script',
    'imagemin',
    'html',
    callback);
});

gulp.task('jade&html', ['jade'], (callback) => {
  return runSequence(
    'html',
    callback);
});

gulp.task('watch', () => {
  gulp.watch(getPath('sass'), ['style']);
  gulp.watch(getPath('jade', 'watch'), ['jade&html']);
  gulp.watch(getPath('images'), ['imagemin']);
});
