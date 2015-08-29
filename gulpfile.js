var gulp = require('gulp');
var gutil = require('gulp-util');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var buffer = require('gulp-buffer');

var sass = require('gulp-sass');

var source = require('vinyl-source-stream');
var browserify = require('browserify');
var coffeeify = require('coffeeify');

gulp.task('default', function() {
  gulp.start('build');
});

gulp.task('css', function () {
  gulp.src('lib/scss/*.scss')
    .pipe(sass({
      includePaths: require('node-bourbon').includePaths,
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('coffee', function() {
  var b = browserify({
    debug: true,
    entries: ['./lib/coffee/floatl.coffee'],
    transform: [coffeeify]
  });

  return b.bundle()
    .pipe(source('floatl.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./dist/js'))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('./dist/js'))
    .on('error', gutil.log);
});

gulp.task('build', ['css', 'coffee'], function() {

});
