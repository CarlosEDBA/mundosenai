var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
 
gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('start', function () {
  nodemon({
    script: 'app.js',
    ext: 'js html',
    env: { 'NODE_ENV': 'development' }
  })
})

gulp.task('build-react', function() {
    return browserify('./react/Bootstrap.js')
        .bundle()
        .pipe(source('react-bundle.js'))
        .pipe(gulp.dest('./public/js'));
});

gulp.task('build', function() {
    return browserify('./public/js/src/Bootstrap.js')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./public/js'));
});

gulp.task('watch', function () {
  gulp.watch('./public/js/**/*.js', ['build']);
});