var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require("gulp-rename"),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

gulp.task('sass', function() {
	// return gulp.src(['app/sass/*.sass', 'app/sass/*.scss'])
	return gulp.src('app/sass/**/*.+(scss|sass)')
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) //expanded|compact|compressed|nested
		.pipe(autoprefixer(['last 1 versions'], { cascade: true }))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('scripts', function() {
  return gulp.src('app/js/*.js')
    .pipe(concat('bundle.js'))
    .pipe(rename('bundle.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        browser: "google chrome",
        open: false,
        notify: false
    });
});

gulp.task('watch', ['browser-sync', 'sass'/*, 'scripts'*/], function() {
    gulp.watch(['app/sass/*.+(scss|sass)'], ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});