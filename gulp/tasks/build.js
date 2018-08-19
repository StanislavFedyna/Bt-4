module.exports = function (gulp, plugins) {

    gulp.src([ // Переносим ФАЙЛ ТА библиотеки в продакшен(типу CSS SHAKE або інших)
      'src/css/main.css'
      // 'app/css/libs.min.css' //Записати потрібну лібу
      ])
    .pipe(gulp.dest('dist/css'))
    
    //Fonts
    gulp.src('src/fonts/*')
    .pipe(gulp.dest('dist'))

    //JS
    gulp.src('src/js/*')
    .pipe(gulp.dest('dist/js'))

    //HTML
    gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
  
  };

