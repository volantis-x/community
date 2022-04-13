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

gulp.task('minify', gulp.parallel(
    minify_html,
    minify_css,
    minify_js
))

// CSP inline hash
const hashstream = require('inline-csp-hash');
const crypto = require('crypto');
const hash = (s) => crypto.createHash("sha256").update(s).digest('base64');

function getRandStr(len) {
  var str = '';
  for (var i = 0; i < len; i++) {
    str += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  return str;
}
const nonce = getRandStr(15);

// script White list [scripts in event handlers (eg onclick)]. 包含压缩的 inline js
unsafe_script_list = [
  "this.media='all';this.onload=null",
  'this.media="all",this.onload=null',
  "errorImgAvatar(this)",
  "errorImgCover(this)",
  "return false;",
  "return!1",
  "history.back()",
  "history.forward()",
  "window.location.reload()",
  "VolantisApp.scrolltoElement(volantis.dom.bodyAnchor)",
]
// script hash White list
unsafe_script_hash = ["'sha256-MXV1jvkHrZruEyFEOrQRjKs9WlPZC1V/3RLoKrkoDFQ='"]

unsafe_script_list.forEach(e => {
  unsafe_script_hash.push("'sha256-" + hash(e) + "'")
});

gulp.task('csp_hash', () => {
  return gulp.src(['./public/**/*.html','!./public/{lib,lib/**}','!./public/{libs,libs/**}','!./public/{media,media/**}'])
    .pipe(hashstream({
      what: 'script:not([type="application/ld+json"])',
      replace_cb: (s, hashes) => {
        unsafe_script_hash.push.apply(unsafe_script_hash,hashes);
        unsafe_script_hash=Array.from(new Set(unsafe_script_hash))
        return s
      }
    }))
  ;
});

gulp.task('csp_replace', () => {
  return gulp.src(['./public/**/*.html','!./public/{lib,lib/**}','!./public/{libs,libs/**}','!./public/{media,media/**}'])
    .pipe(hashstream({
      what: 'script:not([type="application/ld+json"])',
      replace_cb: (s, hashes) => {
        unsafe_script_hash=Array.from(new Set(unsafe_script_hash))
        s = s.replace(/<script.*?>/g, function (match) {
          return match.replace(/>/g, ` nonce='${nonce}'>`);
        });
        s=s.replace(/script-src 'self' https: 'unsafe-inline'[^;]*/, `script-src 'self' https: 'unsafe-hashes' 'nonce-${nonce}' 'strict-dynamic' ` + unsafe_script_hash.join(" "))
        return s
      }
    }))
    .pipe(gulp.dest('./public'))
  ;
});

gulp.task('csp', gulp.series('csp_hash','csp_replace'));

gulp.task('default', gulp.series('minify','csp'));
