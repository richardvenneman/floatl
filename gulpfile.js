// Gulp dependencies
var gulp = require('gulp');
var gutil = require('gulp-util');
var rename = require('gulp-rename');

// Style dependencies
var sass = require('gulp-sass');

// Build dependencies
var buffer = require('gulp-buffer');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var coffeeify = require('coffeeify');
var uglify = require('gulp-uglify');

gulp.task('default', ['build']);

//==============
// Build tasks =
//==============

// Build task: JavaScript compilation

gulp.task('js', function() {
  var b = browserify({
    debug: true,
    entries: ['./lib/coffee/floatl.coffee'],
    transform: [coffeeify]
  });

  return b.bundle()
    .pipe(source('floatl.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./build/js'))
    .on('error', gutil.log);
});

gulp.task('js:dist', function() {
  var b = browserify({
    debug: false,
    entries: ['./lib/coffee/floatl.coffee'],
    standalone: 'Floatl',
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

// Build task: CSS compilation

gulp.task('css', function() {
  gulp.src('./lib/scss/*.scss')
    .pipe(sass({
      includePaths: require('node-bourbon').includePaths,
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(gulp.dest('build/css'))
});

gulp.task('css:dist', function() {
  gulp.src('./lib/scss/*.scss')
    .pipe(sass({
      includePaths: require('node-bourbon').includePaths,
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('build', ['js', 'css']);
gulp.task('build:dist', ['js:dist', 'css:dist']);

//===========
// Watchers =
//===========

gulp.task('watch', function() {
  gulp.watch(['lib/coffee/floatl.coffee'], ['js']);
  gulp.watch(['lib/scss/floatl.scss'], ['css']);
});
