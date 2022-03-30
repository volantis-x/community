var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var htmlmin = require('gulp-html-minifier-terser');
var htmlclean = require('gulp-htmlclean');
var terser = require('gulp-terser');

// 压缩css文件
const minify_css = () => (
    gulp.src(['./public/**/*.css','!./public/{lib,lib/**}','!./public/{libs,libs/**}','!./public/{media,media/**}'])
        .pipe(minifycss())
        .pipe(gulp.dest('./public'))
);

// 压缩html文件
const minify_html = () => (
    gulp.src(['./public/**/*.html','!./public/{lib,lib/**}','!./public/{libs,libs/**}','!./public/{media,media/**}'])
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
    gulp.src(['./public/**/*.js', '!./public/**/*.min.js','!./public/{lib,lib/**}','!./public/{libs,libs/**}','!./public/{media,media/**}'])
        .pipe(terser())
        .pipe(gulp.dest('./public'))
)

module.exports = {
    minify_html: minify_html,
    minify_css: minify_css,
    minify_js: minify_js
};

gulp.task('minify', gulp.parallel(
    minify_html,
    minify_css,
    minify_js
))

// // CSP inline hash
// const hashstream = require('inline-csp-hash');
// const crypto = require('crypto');
// const hash = (s) => crypto.createHash("sha256").update(s).digest('base64');
// unsafe_script_list = [
//   "this.media='all';this.onload=null",
//   "errorImgAvatar(this)",
//   "errorImgCover(this)",
// ]
// unsafe_script_hash = ["'sha256-MXV1jvkHrZruEyFEOrQRjKs9WlPZC1V/3RLoKrkoDFQ='"]
// unsafe_script_list.forEach(e => {
//   unsafe_script_hash.push("'sha256-" + hash(e) + "'")
// });

// gulp.task('csp', () => {
//   return gulp.src(['./public/**/*.html','!./public/{lib,lib/**}','!./public/{libs,libs/**}','!./public/{media,media/**}'])
//     .pipe(hashstream({
//       what: 'script',
//       replace_cb: (s, hashes) => {
//         unsafe_script_hash=unsafe_script_hash.concat(hashes)
//         return s
//       }
//     }))
//     .pipe(hashstream({
//       what: 'script',
//       replace_cb: (s, hashes) => {
//         unsafe_script_hash=Array.from(new Set(unsafe_script_hash))
//         s=s.replace(/script-src 'self' https: 'unsafe-inline'[^;]*/, "script-src 'self' https: 'unsafe-hashes' " + unsafe_script_hash.join(" "))
//         return s
//       }
//     }))
//     // .pipe(hashstream({
//     //   what: 'style',
//     //   replace_cb: (s, hashes) => s.replace(/style-src 'self' https: 'unsafe-inline'[^;]*/, "style-src 'self' https: " + hashes.join(" "))
//     // }))
//     .pipe(gulp.dest('./public'))
//   ;
// });

gulp.task('default', gulp.series('minify'));