var plugins = require('gulp-load-plugins'),
    gulp    = require('gulp');
    
function getTask(task) {
  return require('./gulp/tasks/' + task)(gulp, plugins);
}

gulp.task('sass', getTask('sass'));
gulp.task('server', getTask('server'));
gulp.task('img', getTask('img'));
gulp.task('scripts', getTask('scripts'));
gulp.task('css-libs', getTask('css-libs'));
gulp.task('clean', getTask('clean'));
gulp.task('watch', ['server', 'css-libs', 'scripts'], getTask('watch'));
gulp.task('build', ['clean', 'img', 'sass', 'scripts'], getTask('build'));

// From time to time
gulp.task('cache', getTask('cache'));