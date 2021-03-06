var gulp = require('gulp');
var config = require('../config');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var include = require("gulp-include");
var print = require('gulp-print');
var color = require('gulp-color');

gulp.task("scripts", function () {
	gulp.src(config.src.common)
		.pipe(print(function(filename) {
			var colors3 = color("Updated: " + filename.slice(12), "GREEN");
			return colors3;
		}))
		.pipe(include({
			extensions: "js",
			hardFail: true,
			includePaths: [
				config.src.nodeModules,
				config.src.js,
				config.src.components
			]
		}))
		.on('error', config.errorHandler)
		.pipe(uglify())
		.pipe(rename(config.src.outputFile))
		.pipe(gulp.dest(config.src.js));
});
