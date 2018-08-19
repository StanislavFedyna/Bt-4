var browserSync = require('browser-sync');

module.exports = function (gulp, plugins) {

  return function() {
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('src/**/*.html', browserSync.reload);
    gulp.watch('src/js/**/*.js', browserSync.reload);
  };

};
