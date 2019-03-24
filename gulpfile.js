'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('basic', () => {
	return gulp.src('./src/**/*.js')
		.pipe(eslint())
		.pipe(eslint.format());
});

gulp.task('load-config', () => {
	return gulp.src('./src/**/*.js')
		.pipe(eslint({
			// Load a specific ESLint config
			configFile: '.eslintrc.json'
		}))
		.pipe(eslint.format());
});

gulp.task('lint', [
	'basic',
	'load-config',
], () => {
	console.log('[Gulp-Lint] All tasks completed successfully.');
});