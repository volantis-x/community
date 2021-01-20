var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var htmlmin = require('gulp-html-minifier-terser');
var htmlclean = require('gulp-htmlclean');
var terser = require('gulp-terser');

// 压缩css文件
const minify_css = () => (
    gulp.src(['./public/**/*.css'])
        .pipe(minifycss())
        .pipe(gulp.dest('./public'))
);

// 压缩html文件
const minify_html = () => (
    gulp.src(['./public/**/*.html','!./public/{lib,lib/**}'])
        .pipe(htmlclean())
        .pipe(htmlmin({
            removeComments: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
        }))
        .pipe(gulp.dest('./public'))
)

// 压缩js文件
const minify_js = () => (
    gulp.src(['./public/**/*.js', '!./public/**/*.min.js','!./public/{lib,lib/**}'])
        .pipe(terser())
        .pipe(gulp.dest('./public'))
)

module.exports = {
    minify_html: minify_html,
    minify_css: minify_css,
    minify_js: minify_js
};
gulp.task('one', gulp.parallel(
    minify_html,
    minify_css,
    minify_js
))

gulp.task('default', gulp.series('one'));