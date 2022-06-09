let gulp = require('gulp');
let concat = require('gulp-concat');
let cleanCss = require('gulp-clean-css');

gulp.task('pack-js', function () {
    return gulp.src(['public/js/*.js'])
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('build'));
});

gulp.task('pack-css', function () {
    return gulp.src(['public/css/*.css'])
        .pipe(concat('stylesheet.css'))
        .pipe(cleanCss())
        .pipe(gulp.dest('build'));
});

gulp.task('default', gulp.series('pack-js', 'pack-css'));