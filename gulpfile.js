var gulp                = require('gulp');
var react               = require('gulp-react');
var es6ModuleTranspiler = require("gulp-es6-module-transpiler");
var es6Transpiler       = require('gulp-es6-transpiler');


gulp.task('default', ['libs','vendor']);

gulp.task('libs', function () {
  return gulp.src([
      './**/*.js',
      './**/*.jsx',
      '!./dist/**/*.js',
      '!./vendor/**/*.js',
      '!./gulpfile.js',
      '!./node_modules/**/*.js'
    ])
    .pipe(react({
      harmony: true
    }))
    .pipe(es6ModuleTranspiler({ type: "amd" }))
    .pipe(es6Transpiler({
      disallowUnknownReferences: false,
      environments: ["browser"]
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('vendor', function () {
  return gulp.src([
      './vendor/**/*.js',
      '!./vendor/require.js'
    ])
    .pipe(es6ModuleTranspiler({ type: "amd" }))
    .pipe(gulp.dest('dist/vendor'));
});
