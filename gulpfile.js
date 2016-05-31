'use strict';

const browserify = require('browserify');
const gulp = require('gulp');
const tap = require('gulp-tap');
const gutil = require('gulp-util');
const concat = require('gulp-concat');
const execa = require('execa');

gulp.task('browserify', function () {
  return gulp.src(['scripts/platform-tape.js', 'benchmark/*.js'], {read: false})
    .pipe(tap(function (file) {
      gutil.log('bundling ' + file.path);
      file.contents = browserify(file.path, {
        ignoreMissing: true
      }).bundle();
    }))
    .pipe(gulp.dest('browserified'));
});

gulp.task('browser:chrome', function () {
  return gulp.src(['browserified/*.js'], {read: false})
    .pipe(tap(function (file) {
      gutil.log('running ' + file.path);
      const r = execa.shellSync(`cat ${file.path} | testling -x open`, {stripEof: true});
      file.contents = new Buffer(r.stdout);
    }))
    .pipe(concat('chrome.md'))
    .pipe(gulp.dest('raw/'));
});

gulp.task('browser:firefox', function () {
  return gulp.src(['browserified/*.js'], {read: false})
    .pipe(tap(function (file) {
      gutil.log('running ' + file.path);
      const r = execa.shellSync(`cat ${file.path} | testling -x "open -a /Applications/Firefox.app"`, {stripEof: true});
      file.contents = new Buffer(r.stdout);
    }))
    .pipe(concat('firefox.md'))
    .pipe(gulp.dest('raw/'));
});

gulp.task('browser:safari', function () {
  return gulp.src(['browserified/*.js'], {read: false})
    .pipe(tap(function (file) {
      gutil.log('testling ' + file.path);
      const r = execa.shellSync(`cat ${file.path} | testling -x "open -a Safari"`, {stripEof: true});
      file.contents = new Buffer(r.stdout);
    }))
    .pipe(concat('safari.md'))
    .pipe(gulp.dest('raw/'));
});

gulp.task('browsers', gulp.series('browser:chrome', 'browser:firefox', 'browser:safari'));

gulp.task('node', function () {
  return gulp.src(['scripts/platform.js', 'benchmark/*.js'], {read: false})
    .pipe(tap(function (file) {
      gutil.log('blue-tape ' + file.path);
      const r = execa.shellSync(`blue-tape ${file.path}`, {stripEof: true});
      file.contents = new Buffer(r.stdout);
    }))
    .pipe(concat('node.md'))
    .pipe(gulp.dest('raw/'));
});

gulp.task('summary', function () {
  return gulp.src(['raw/*.md'], {read: false})
    .pipe(tap(function (file) {
      gutil.log('summary ' + file.path);
      const r = execa.shellSync(`cat ${file.path} | tap-summary --no-ansi --no-progress --markdown`);
      file.contents = new Buffer(r.stdout);
    }))
    .pipe(gulp.dest('results/'));
});
