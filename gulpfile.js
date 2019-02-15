const gulp = require("gulp");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const terser = require("gulp-terser");

const jsFiles = ["src/js/main.js"];

function CopyHTML() {
  return gulp.src("src/*.html").pipe(gulp.dest("build"));
}
function MakeCSS() {
  return gulp
    .src("src/sass/*.scss")
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(gulp.dest("build/css"));
}
function JavaScript() {
  return gulp
    .src(jsFiles)
    .pipe(concat("main.js"))
    .pipe(terser())
    .pipe(gulp.dest("build/js"));
}
function build() {
  gulp.series(CopyHTML, MakeCSS, JavaScript);
}
gulp.task("default", gulp.series(build));
gulp.task("watch", function() {
  gulp.watch("src/*.html", gulp.series(CopyHTML));
  gulp.watch("src/sass/*.scss", gulp.series(MakeCSS));
  gulp.watch("src/js/*.js", gulp.series(JavaScript));
});
