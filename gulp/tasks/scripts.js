var gulp = require('gulp');
var config = require('../config');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var include = require("gulp-include");

gulp.task("scripts", function () {
	gulp.src(config.src.common)
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
