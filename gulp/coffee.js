'use strict';
/**
 * CoffeeScript task.
 */


const gulp   = require('gulp'),
      config = reactgulp.config,
      $      = reactgulp.plugins;

gulp.task('coffee', () => {
  return gulp.src(reactgulp.getPath('coffee'))
    .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
    .pipe($.coffee(config.coffee.options))
    .pipe(gulp.dest(reactgulp.getPath('coffee', 'dest')));
});
