'use strict';
/**
 * Image minify task.
 */

const gulp   = require('gulp'),
      config = reactgulp.config,
      $      = reactgulp.plugins;

gulp.task('imagemin', () => {
  return gulp.src(reactgulp.getPath('images'))
    .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
    .pipe($.imagemin(config.imagemin.options))
    .pipe(gulp.dest(reactgulp.getPath('images', 'dest')))
    .pipe($.size({title: 'imagemin'}))
    .pipe($.browser.reload({stream: true}));
});
