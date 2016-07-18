'use strict';
/**
 * Web test task.
 */

const gulp   = require('gulp'),
      config = reactgulp.config,
      $      = reactgulp.plugins;

gulp.task('webtest', () => {
  return generateWebTestTask('chrome');
});
gulp.task('webtest:chrome', () => {
  return generateWebTestTask('chrome');
});

function generateTestTask(browser) {
  return gulp.src('')
    .pipe($.nightwatch({
      configFile: config.nightwatch.conf,
      cliArgs: {
        env: browser,
        tag: 'sandbox'
      }
    }));
}
