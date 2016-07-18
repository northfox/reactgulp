'use strict';
/**
 * Copy task.
 */

const gulp = require('gulp'),
      config = reactgulp.config,
      $ = reactgulp.plugins,
      ms = require('merge-stream'),
      path = config.path.copy;

gulp.task('copy', function () {
  let files = path.init,
      stream = ms(),
      source,
      i;
  files.forEach((file) => {
    source = gulp.src(file.from)
      .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
      .pipe(gulp.dest(file.to));
    stream.add(source);
  });
  stream.on('end', () => {
    $.browser.stream();
  });
  return stream;
});

gulp.task('copy:js', () => {
  return gulp.src(path.js.from)
    .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
    .pipe(gulp.dest(path.js.to))
    .pipe($.size({title: 'copy:js'}))
    .pipe($.browser.stream());
});
