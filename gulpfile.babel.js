/**
 * 1.rename gulpfile.js to gulpfile.babel.js
 * 2.then you can use ES6 in gulpfile
 *
 */
const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', () => {
    return gulp.src('app/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'));
});