'use strict';
/**
 * Style task.
 */

const gulp   = require('gulp'),
      config = reactgulp.config,
      $      = reactgulp.plugins,
      pkg    = reactgulp.pkg;

gulp.task('style', () => {
  if(reactgulp.option.dev) {
    config.style.sass.options.sourceMap = true;
    config.style.sass.options.style = 'expanded';
  }

  return gulp.src(reactgulp.getPath('sass'))
    .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
    .pipe($.sass(config.style.sass.options))
    .pipe($.autoprefixer(config.style.autoprefixer.browsers))
    .pipe($.if(reactgulp.option.min, $.cssnano()))
    .pipe(gulp.dest(reactgulp.getPath('sass', 'dest')))
    .pipe($.size({title: 'style'}))
    .pipe($.browser.reload({stream: true}));
});
