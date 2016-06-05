var gulp = require('gulp');
var mocha = require('gulp-mocha');
var jshint = require('gulp-jshint');
var jshStylish = require('jshint-stylish');
var concat = require('gulp-concat');
var insert = require('gulp-insert');
var documentation = require('gulp-documentation')
var docTheme = require('documentation-theme-node')

gulp.task('watch', function () {
    gulp.watch('lib/**/*.js', ['build', 'test-min', 'lint']);
});

gulp.task('build', function () {
    return gulp.src('lib/run.js')
        .pipe(concat('app.js'))
        .pipe(insert.prepend('#! /usr/bin/env node \r\n\r\n'))
        .pipe(gulp.dest('bin'));
});

gulp.task('test', function() {
    return gulp.src('test/*.js', {read: false})
        .pipe(mocha({reporter: 'spec'}));
});
gulp.task('test-min', function() {
    return gulp.src('test/*.js', {read: false})
        .pipe(mocha({reporter: 'min'}));
});

gulp.task('lint', function() {
    return gulp.src('lib/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter(jshStylish));
});

gulp.task('doc', function () {
    gulp.src('lib/**/*.js')
        .pipe(documentation({
            format: 'html',
            theme: docTheme
        }))
        .pipe(gulp.dest('doc'));
});

gulp.task('default', ['test']);