var gulp = require("gulp");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");

var jsFiles = ["src/js/main.js"];

function CopyHTML() {
  return gulp.src("src/*.html").pipe(gulp.dest("build"));
}
function MakeCSS() {
  return gulp
    .src("src/sass/main.scss")
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(gulp.dest("build/css"));
}
function JavaScript() {
  return gulp
    .src(jsFiles)
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(gulp.dest("build/js"));
}
gulp.task("default", gulp.series(CopyHTML, MakeCSS, JavaScript));
gulp.task("watch", function() {
  gulp.watch("src/*.html", gulp.series(CopyHTML));
  gulp.watch("src/sass/*.scss", gulp.series(MakeCSS));
  gulp.watch("src/js/*.js", gulp.series(JavaScript));
});
