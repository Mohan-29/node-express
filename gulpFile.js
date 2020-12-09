const gulp = require("gulp");

let srcPath = [
    '**/*',
    '!gulpFile.js',
    '!./node_modules',
    '!./package.json',
    '!./package-lock.json',
    '!./README.md'
];

gulp.task('build', () => {
    return gulp.src(srcPath)
        .pipe(gulp.dest('dist/'))
});