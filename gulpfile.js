'use strict';

const gulp = require("gulp");
const plumber = require('gulp-plumber');
const webpack = require("webpack-stream");

const babel = require('babel-register');

const gutil = require('gulp-util');

const path = require('path');


const config = {
    app: {
        src: './app/index.js',
        dest: './dist/assets/js'
    },
    webpack: {
        config: './webpack.config.js'
    }
};

gulp.task('app', function () {
    return gulp.src(config.app.src)
        .pipe(plumber())
        .pipe(webpack(require(config.webpack.config)))
        .pipe(gulp.dest(config.app.dest));
});


gulp.task('watch', ['app'], function () {
    gulp.watch('./app/**/*.js', ['app']);
});

gulp.task('default', ['app']);
