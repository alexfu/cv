var gulp = require("gulp");
var sass = require("gulp-sass");
var ejs = require("gulp-ejs");
var webserver = require("gulp-webserver");
var ghPages = require("gulp-gh-pages");

var del = require("del");
var cv = require("./cv");

gulp.task("clean", function() {
  return del(["dist"]);
});

gulp.task("ejs", ["clean"], function() {
  return gulp.src("src/index.ejs")
  	.pipe(ejs({data: cv}, {ext: ".html"}))
  	.pipe(gulp.dest("dist"));
});

gulp.task("copy", ["clean"], function() {
  var files = ["src/**/*.html", "src/**/*.js"];
  return gulp.src(files)
    .pipe(gulp.dest("dist"));
});

gulp.task("sass", ["clean"], function() {
  return gulp.src("src/sass/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/css"));
});

gulp.task("server", function() {
  return gulp.src("dist/")
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task("watch", function () {
  gulp.watch("src/**/*", ["build"]);
});

gulp.task("build", ["copy", "ejs", "sass"]);

gulp.task("deploy", function() {
  return gulp.src("dist/**/*")
    .pipe(ghPages());
});

gulp.task("default", ["build", "watch"]);
