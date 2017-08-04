var gulp         = require('gulp');
var config       = require('../config');
var browserSync  = require('browser-sync');



gulp.task('watch', ['sass', 'scripts', 'browser-sync', 'nunjucks'], function() {
	gulp.watch(config.src.sass + "/**/*.{sass,scss}", ['sass']);
	gulp.watch(config.src.spriteImg + "/*.png", ['sprite']);
	gulp.watch(config.src.spriteSvg + "/**/*.svg", ['svgSprite']);
	gulp.watch(config.src.svgInline + "/fill_removed/*.svg", ['svgRemoveAttr']);
	gulp.watch(config.src.svgInline + "/default/*.svg", ['svgDefault']);
	gulp.watch(config.src.common, ['scripts']);
	gulp.watch(config.src.templates + "/**/*.html", ['nunjucks']);
	gulp.watch(config.src.root + "/*.html", browserSync.reload);
});

gulp.task('default', ['watch']);
