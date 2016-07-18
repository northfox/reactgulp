'use strict';
// Karma configuration
// Generated on Tue Jun 16 2015 22:22:22 GMT+0900 (JST)

const extend = require('extend');

module.exports = (config) => {
  const conf = require('./config');
  const webpackConfig = extend({},require('./webpack.config'));
  delete webpackConfig.entry;
  delete webpackConfig.output;

  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: conf.path.test.src,
    exclude: [],
    preprocessors: {
      '**/test/**/*.js': ['webpack']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      quiet: true
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'dots', 'coverage', 'junit'],
    coverageReporter: {
      dir: 'coverage',
      reporters: [
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' }
      ]
    },
    junitReporter: {
      outputDir: 'coverage',
      outputFile: 'jstest-results.xml',
      useBrowserName: false
    },

    // web server port
    port: 9001,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
