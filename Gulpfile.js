'use strict';

let gulp = require('gulp');
let nodemon = require('gulp-nodemon');

gulp.task('default', () => {
  nodemon({
    script: './app/index.js', ext: 'js'
  });
});
