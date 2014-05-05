var gulp                = require('gulp');
var react               = require('gulp-react');
var es6ModuleTranspiler = require("gulp-es6-module-transpiler");
var es6Transpiler       = require('gulp-es6-transpiler');

gulp.task('default', function () {
  return gulp.src([
      'data/**/*.js',
      'lib/**/*.jsx'
    ])
    .pipe(react({
      harmony: true
    }))
    .pipe(es6ModuleTranspiler({ type: "cjs" }))
    .pipe(es6Transpiler({
      disallowUnknownReferences: false,
      environments: ["browser"]
    }))
    .pipe(gulp.dest('dist'));
});

