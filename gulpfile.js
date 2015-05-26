var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var cached = require('gulp-cached');
var livereload = require('gulp-livereload');
var cssLinter = require('gulp-csslint');
var htmlLinter = require('gulp-html5-lint');
var child_process = require('child_process');
var Firebase = require('Firebase');
var hostnameListRef = new Firebase('https://dazzling-heat-7283.firebaseio.com/hostnames');
var hostnameRef;

var HTML_PATH = 'challenges/**/*.html';
var CSS_PATH = 'challenges/**/*.css';

gulp.task('html', function() {
  return gulp.src(HTML_PATH)
    .pipe(cached('html'))
    .pipe(livereload())
    .pipe(htmlLinter());
});

gulp.task('css', function() {
  return gulp.src(CSS_PATH)
    .pipe(cached('css'))
    .pipe(livereload())
    .pipe(cssLinter({
      // Only flag errors.
      'box-model': true,
      'display-property-grouping': true,
      'duplicate-properties': true,
      'empty-rules': true,
      'known-properties': true
    }))
    .pipe(cssLinter.reporter());
});

gulp.task('server', function(done) {
  nodemon({
    script: 'app.js'
  });
});

gulp.task('watch', function() {
  livereload.listen({ port: 19999 });

  function reload(file) {
    livereload.changed(file.path);
  }
  gulp.watch([HTML_PATH], ['html']).on('change', reload);
  gulp.watch([CSS_PATH], ['css']).on('change', reload);
});

gulp.task('publish-hostname', function(done) {
  child_process.exec('hostname', function(err, hostname) {
    if (err) {
      done(err);
      return;
    }

    hostnameRef = hostnameListRef.push(hostname.trim(), done);
  });
});

process.on('SIGINT', function() {
  if (!hostnameRef) process.exit();

  hostnameRef.remove(function() {
    process.exit();
  });
});

gulp.task('default', ['css', 'html', 'server', 'watch', 'publish-hostname']);
