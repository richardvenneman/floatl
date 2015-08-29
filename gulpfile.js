var gulp = require('gulp');
var gutil = require('gulp-util');
var mocha = require('gulp-mocha');
var sass = require('gulp-sass');

gulp.task('default', function() {
  gulp.start('test');
});

gulp.task('test', function() {
  return gulp.src(['test/*.js'], { read: false })
    .pipe(mocha({ reporter: 'list' }))
    .on('error', gutil.log);
});

gulp.task('test:watch', function() {
  gulp.watch(['lib/**', 'test/**'], ['mocha']);
});

gulp.task('css', function () {
  gulp.src('lib/scss/*.scss')
    .pipe(sass({
      includePaths: require('node-bourbon').includePaths
    }).on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('css:watch', function () {
  gulp.watch('/lib/scss/*.scss', ['sass']);
});
