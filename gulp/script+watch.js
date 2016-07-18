'use strict';
/**
 * Scripts task.
 */

const gulp    = require('gulp'),
      config  = reactgulp.config,
      $       = reactgulp.plugins,
      conf    = require('../webpack.config.js'),
      through = require('through2'),
      path    = require('path'),
      webpack = require('webpack');

/**
 * Make entries.
 */
gulp.task('script:_makeEntries', () => {
  if(reactgulp.option.dev === false) {
    delete conf.devtool;
  }
  return gulp.src(config.path.js.src)
    .pipe(through.obj(function(file, charset, callback) {
      const fileName = path.basename(file.path, path.extname(file.path));
      conf.entry = conf.entry || {};
      conf.entry[fileName] = file.path;
      this.push(file);
      callback();
    }));
});

function logWebpack(err, stats, callback) {
  if(err) return console.error(err);

  const jsonStats = stats.toJson();
  if(jsonStats.errors.length > 0) {
    jsonStats.errors.forEach((error) => {
      console.error(error);
    });
    return console.error("errors end.");
  }

  if(jsonStats.warnings.length > 0) {
    jsonStats.warnings.forEach((warning) => {
      console.log(warning);
    });
  }

  $.browser.reload();
  if(callback && !callback.called) {
    callback.called = true;
    callback();
  }
  return console.log("logWebpack end.");
}

/**
 * Execute webpack.
 */
function executeWebpack(watch, callback) {
  conf.watch = watch;
  conf.output.path = reactgulp.getPath('js', 'dest');

  webpack(conf, (err, stats) => {
    logWebpack(err, stats, callback);
  });
}

gulp.task('script', ['script:_makeEntries'], (callback) => {
  return executeWebpack(false, callback);
});
gulp.task('script:watch', ['script:_makeEntries'], (callback) => {
  return executeWebpack(true, callback);
});
