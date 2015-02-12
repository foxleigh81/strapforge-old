var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// watch files for changes and reload
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: 'public'
    }
  });

  gulp.watch(['*.html', 'static/css/**/*.css', 'static/scripts/**/*.js'], {cwd: 'public'}, reload);
});

gulp.task('custom', function() {
  // place code for your default task here
});
