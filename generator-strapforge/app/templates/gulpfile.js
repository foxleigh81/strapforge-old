var gulp = require('gulp'),
    browserSync = require('browser-sync');
    compass    = require('gulp-compass'),
    concat     = require('gulp-concat'),
    imagemin   = require('gulp-imagemin'),
    jshint     = require('gulp-jshint'),
    notify     = require('gulp-notify'),
    stripDebug = require('gulp-strip-debug'),
    uglify     = require('gulp-uglify'),
    reload = browserSync.reload;

// watch files for changes and reload
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: 'public'
    }
  });

  gulp.watch(['*.html', 'public/static/css/**/*.css', 'public/static/scripts/**/*.js'], { cwd: 'public' }, reload);
});

// Compress and minify images to reduce their file size
gulp.task('images', function() {
    var imgSrc = 'public/static/images/**/*',
        imgDst = 'public/static/images';
 
    return gulp.src(imgSrc)
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(changed(imgDst))
        .pipe(imagemin())
        .pipe(gulp.dest(imgDst))
        .pipe(notify({ message: 'Images task complete' }));

gulp.task('jshint', function() {
    return gulp.src('src/js/*.js')
    .pipe(plumber({
        errorHandler: onError
    }))
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(notify({ message: 'JS Hinting task complete' }));
});

gulp.task('custom', function() {
  // place code for your default task here
});
