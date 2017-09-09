'use strict';

var gulp = require('gulp');

// js uglifier and compressor
var uglify = require('gulp-uglify');
var pump = require('pump');

// css uglifier, compressor & minificator
var cleanCSS = require('gulp-clean-css');
var concatCss = require('gulp-concat-css');

// css preprocessor
var sass = require('gulp-sass');

//js concat
var concat = require('gulp-concat');


// run gulp tasks in sequence
var runSequence = require('run-sequence');

// auto reload browser on changes
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

var paths = {
    scripts: ['scripts/singles/*.js'],
    styles: ['styles/*.scss']
};

gulp.task('sass', function () {
    gulp.src('styles/index.scss')
        .pipe(sass({
            outputStyle: 'compressed',
            includePaths: ['node_modules/susy/sass', 'node_modules/sass-flex-mixin']
        }).on('error', sass.logError))
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(concatCss("style.min.css"))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('styles/'))
        .pipe(browserSync.stream());
});


gulp.task('scripts', function() {
    return gulp.src(paths.scripts)
        // .pipe(uglify())
        .pipe(concat('script.min.js'))
        .pipe(gulp.dest('scripts/'));
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
});

gulp.task('watch', function() {
    gulp.watch(paths.styles, { maxListeners: 999 }, ['sass', reload]);
    gulp.watch(paths.scripts, { maxListeners: 999 }, ['scripts', reload]);
});

gulp.task('default', function() {
    runSequence(
        ['sass', 'scripts', 'watch', 'serve']
    );
});
