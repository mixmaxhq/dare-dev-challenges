var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var cached = require('gulp-cached');
var livereload = require('gulp-livereload');
var htmlLinter = require('gulp-html5-lint');

var htmlPath = 'challenges/**/*.html';
var cssPath = 'challenges/**/*.css';

gulp.task('html', function() {
  return gulp.src(htmlPath)
    .pipe(cached('html'))
    .pipe(livereload())
    .pipe(htmlLinter());
});

gulp.task('css', function() {
  return gulp.src(cssPath)
    .pipe(cached('css'))
    .pipe(livereload());
});

gulp.task('server', function(done) {
  nodemon({
    script: 'app.js'
  });
});

gulp.task('watch', function() {
  livereload.listen({ port: 19999 });

  var watcher = gulp.watch([htmlPath], ['html']);
  gulp.watch([cssPath], ['css']);
  watcher.on('change', function(event) {
    gulp.src(event.path)
      .pipe(livereload());
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
});

gulp.task('default', ['css', 'html', 'server', 'watch']);
