'use strict';
/**
 * HTML task.
 */

const gulp   = require('gulp'),
      config = reactgulp.config,
      $      = reactgulp.plugins;

gulp.task('html', () => {
  return gulp.src(reactgulp.getPath('html'))
    .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
    .pipe($.htmlhint(reactgulp.config.htmlhint))
    .pipe($.htmlhint.reporter())
    .pipe($.htmlhint.failReporter())
    .pipe($.browser.stream());
});
