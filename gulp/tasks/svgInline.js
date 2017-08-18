var gulp = require('gulp');
var config = require('../config');
var svgmin = require('gulp-svgmin');
var cheerio = require('gulp-cheerio');
var runSequence = require('run-sequence');
var print = require('gulp-print');
var newer = require('gulp-newer');
var color = require('gulp-color');

gulp.task('svgRemoveAttr', function () {
	return gulp.src(config.src.svgInline + "/fill_removed/*.svg")
		.pipe(newer(config.src.svgInline))
		.pipe(print(function(filename) {
			var colors1 = color("NEW: " + filename.slice(36), "GREEN");
			return colors1;
		}))
		.pipe(cheerio({
			run: function ($, file) {
				$('[fill]').removeAttr('fill');
				$('[stroke]').removeAttr('stroke');
				$('[style]').removeAttr('style');
				filename = file.relative.slice(0, -4);
				$('svg').attr('class', 'icon ' + 'icon-' + filename);
			},
			parserOptions: {
				xmlMode: true
			}
		}))
		.pipe(svgmin({
			js2svg: {
				pretty: true
			}
		}))
		.pipe(gulp.dest(config.src.svgInline));
});


gulp.task('svgDefault', function () {
	return gulp.src(config.src.svgInline + "/default/*.svg")
	.pipe(newer(config.src.svgInline))
	.pipe(print(function(filename) {
		var colors2 = color("NEW: " + filename.slice(31), "GREEN");
		return colors2;
	}))
	.pipe(cheerio({
			run: function ($, file) {
				filename = file.relative.slice(0, -4);
				$('svg').attr('class', 'icon ' + 'icon-' + filename);
			},
			parserOptions: {
				xmlMode: true
			}
		}))
		.pipe(svgmin({
			js2svg: {
				pretty: true
			}
		}))
		.pipe(gulp.dest(config.src.svgInline));
});
