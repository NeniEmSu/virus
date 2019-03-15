const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();


// Compile scss to css
function style() {
    // Where the scss is located 
    return gulp.src('./scss/**/*.scss')

        // passing files through sass compliler
        .pipe(sass())

        // where compiled css goes
        .pipe(gulp.dest('./css'))

        // for stream changes to all browsersync
        .pipe(browserSync.stream());
}

gulp.task('minifyImg', () =>
    gulp.src('./img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./img'))
);

gulp.task('autoPrefixer', () =>
    gulp.src('./css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('style.css'))
);

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;