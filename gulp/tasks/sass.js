var gulp = require('gulp');
var sass = require('gulp-sass');
var path = require('path');
var config = require('../config');

var srcPath = path.join(__dirname, '../..', config['sass'].src);

gulp.task('sass', function () {
  var destPath = path.join(__dirname, '../..', config['sass'].dest);

  gulp.src(srcPath)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(destPath));


  console.log('This is sass task');
});

gulp.task('sass-watch', function () {
  gulp.watch(srcPath, ['sass']);
});
