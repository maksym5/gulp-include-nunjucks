var gulp         = require('gulp');
var config       = require('../config');
var imagemin     = require('gulp-imagemin');
var plumber      = require('gulp-plumber');
var cache        = require('gulp-cache');



gulp.task('imagemin', function() {
	return gulp.src([
		"!" + config.src.img + "/sprite_{img,svg}/**/*",
		config.src.img + "/**/*.{jpg,png,svg,gif}"
		])
	.pipe(plumber({
		errorHandler: config.errorHandler
	}))
	.pipe(imagemin({
		progressive: true,
		svgoPlugins: [{
			removeViewBox: false
		}]
	}))
	.pipe(gulp.dest(config.dest.img)); 
});
