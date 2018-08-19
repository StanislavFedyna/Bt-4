var
imagemin = require('gulp-imagemin'),
pngquant = require('imagemin-pngquant'),
cache = require('gulp-cache');

module.exports = function (gulp, plugins) {

  return function() {
    gulp.src('src/img/**/*')
      // .pipe(cache(imagemin({ // With cache
      .pipe(imagemin({ // Without cache
        interlaced: true,
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
      }))
      .pipe(gulp.dest('dist/img')); // to dist
  };
  
}