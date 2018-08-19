var
concat = require('gulp-concat'), 
uglify = require('gulp-uglifyjs');

module.exports = function (gulp, plugins) {

  return function () {
    gulp.src([
        'src/libs', //>>>> ADD LIBS
        'src/libs' // >>>> ADD ANOTHER LIBS
      ])
      .pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле libs.min.js
      .pipe(uglify()) // Сжимаем JS файл
      .pipe(gulp.dest('src/js')); //Вигружаємо
  };

};