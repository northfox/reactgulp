'use strict';
/**
 * Jade task.
 */

const gulp   = require('gulp'),
      config = reactgulp.config,
      $      = reactgulp.plugins;

gulp.task('jade', () => {
  return gulp.src(reactgulp.getPath('jade'))
    .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
    .pipe($.jade({
      data: require(config.jade.data, true),
      pretty: true
    }))
    .pipe(gulp.dest(reactgulp.getPath('jade', 'dest')))
    .pipe($.size({title: 'jade'}))
    .pipe($.browser.stream());
});
