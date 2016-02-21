// Gulp dependencies
var gulp = require('gulp');
var gutil = require('gulp-util');

// Build dependencies
var webpack = require('webpack-stream');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

// Style dependencies
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');


// Tasks

gulp.task('js', function() {
  return gulp.src('lib/js/index.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./dist/js'))
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(rename('floatl.min.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/js'))
    .on('error', gutil.log);
});

gulp.task('css', function() {
  gulp.src('./lib/scss/*.scss')
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(autoprefixer({ browsers: ['> 3%', 'ie >= 8'] }))
    .pipe(gulp.dest('dist/css'))
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('build', ['js', 'css']);

gulp.task('default', ['build']);

gulp.task('watch', function() {
  gulp.watch(['lib/js/floatl.js'], ['js']);
  gulp.watch(['lib/scss/floatl.scss'], ['css']);
});
