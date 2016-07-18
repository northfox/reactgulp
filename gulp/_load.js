'use strict';
/**
 * Tasks loader.
 */

const fs = require('fs'),
      path = require('path');

const files = fs.readdirSync(__dirname) || [],
      excludeFile = '_load',
      result = [];

const isReadableFile = (stats, file, name) => {
  return stats.isFile() &&
    path.extname(file) === '.js' &&
    name !== excludeFile;
};

files.forEach((file) => {
  const stats = fs.statSync(path.join(__dirname, file));
  const name = path.basename(file, '.js');
  if(isReadableFile(stats, file, name) === false) {
    return;
  }
  result[name] = require(__dirname + '/' + name);
});

module.exports = result;
