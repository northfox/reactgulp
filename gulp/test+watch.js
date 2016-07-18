'use strict';
/**
 * Unit test task.
 */

const gulp   = require('gulp'),
      config = reactgulp.config,
      Server = require('karma').Server,
      CONFFILE = process.cwd() + '/karma.conf.js';

const generateTestTask = (watch, callback) => {
  const server = new Server({
    configFile: CONFFILE,
    singleRun: watch ? false : true,
    autoWatch: watch ? true : false
  });

  if(callback) {
    server.start(callback);
  } else {
    server.start();
  }
};

gulp.task('test', (callback) => {
  return generateTestTask(false, callback);
});
gulp.task('test:watch', () => {
  return generateTestTask(true, null);
});
