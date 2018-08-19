var cache = require('gulp-cache');

module.exports = function (gulp, plugins) {

  return function () {
      return cache.clearAll();
    }
    
};
