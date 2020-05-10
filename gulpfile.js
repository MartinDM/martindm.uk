// gulpfile.js
const gulp = require("gulp");
const sass = require("gulp-sass");

// a task to generate the css with sass
gulp.task('css', function() {
  return gulp.src('./src/scss/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    })
    .on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
});

/*
  Watch folders for source changess
*/
gulp.task("watch", function() {
  gulp.watch('./src/scss/**/*.scss', gulp.parallel('css'));
});

/*
  Build it!
*/
gulp.task('build', gulp.parallel(
  'css'
));