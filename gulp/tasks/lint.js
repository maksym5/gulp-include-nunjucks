var gulp        = require('gulp');
var config      = require('../config');
var htmlhint    = require('gulp-htmlhint');
var eslint      = require('gulp-eslint');
var sassLint    = require('gulp-sass-lint');

gulp.task('lint:js', function() {
  return gulp.src([config.js + '/**/*.js', '!node_modules/**'])
    .pipe(eslint({
      fix: true,
      rules: {
        'no-undef': 0
      },
      globals: ['$']
}))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});


gulp.task('lint:html', function() {
  return gulp.src(config.root + "/*.html")
    .pipe(htmlhint('.htmlhintrc'))
    .pipe(htmlhint.failReporter());
});

gulp.task('lint:sass', function() {
  return gulp.src(config.sass + '/**/*.s+(a|c)ss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});

gulp.task('lint', [
  'lint:js',
  'lint:sass',
  'lint:html'
]);
