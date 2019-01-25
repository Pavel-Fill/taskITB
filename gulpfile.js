//Sass configuration
var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
let cleanCSS = require('gulp-clean-css');

// gulp.task('sass', function(e) {
//     gulp.src('css/styles.scss')
//         .pipe(sass())
//         .pipe(gulp.dest(function(f) {
//             return f.base;
//         }))
//         e();
// });
 
gulp.task('less', function () {
  return gulp.src('./less/styles.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./css'));
});

gulp.task('default', gulp.series('less', function(e) {
    gulp.watch('less/styles.less', gulp.series('less', function(x){x();}));
    e();
}))