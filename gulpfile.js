var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var livereload = require('gulp-livereload');

gulp.task('server', function() {
  nodemon({
    script: 'app.js'
  });
});

gulp.task('html', function() {
  gulp.src('challenge-*/*.html')
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen({ port: 19999 });

  gulp.watch('**/*.html', ['html']);
});

gulp.task('default', ['server', 'watch']);
