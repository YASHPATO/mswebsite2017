const gulp = require("gulp"),
      sourcemaps = require("gulp-sourcemaps"),
      sass = require("gulp-sass"),
      autoprefixer = require("gulp-autoprefixer"),
      cssnano = require("gulp-cssnano"),
      rename = require("gulp-rename")

gulp.task('css', function () {
    return gulp.src('static/sass/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 4 version'))
    .pipe(gulp.dest('app/assets/css'))
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min' }))
    // .pipe(header(banner, { package : package }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('static/css'));
});

gulp.task('default', ['css'], function () {
    gulp.watch("static/sass/**/*.scss", ['css']);
});