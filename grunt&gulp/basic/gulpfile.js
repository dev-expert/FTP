const gulp = require("gulp");
var imagemin = require("gulp-imagemin");
const concat = require("gulp-concat");
const terser = require("gulp-terser");
const sourcemaps = require("gulp-sourcemaps");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");

const { src, series, parallel, dest, watch } = require("gulp");

//js path
const jsPath = "src/assets/js/**/*.js"; //all js files and folder ik hi folder meh honge src meh

const cssPath = "src/assets/css/**/*.css";

//src pointing to the source file
//.pipe means like then in js
//dest points to the output folder

//it copied all html files and saved it into dist
function copyHtml() {
  return src("src/*.html").pipe(gulp.dest("dist"));
}

//if you want to optimize the images
//imagemin apni plugin ha
function imgTask() {
  return src("src/images/*").pipe(imagemin()).pipe(gulp.dest("dist/images"));
}

//concating and minify the js file
//idhar gulp uglify pkg isliye use ni kiya kyu ki yeh es6  version ko support ni karta
function jsTask() {
  return src(jsPath)
    .pipe(sourcemaps.init())
    .pipe(concat("all.js"))
    .pipe(terser()) //using to minify the js file
    .pipe(sourcemaps.write("."))
    .pipe(dest("dist/assets/js"));
}

function cssTask() {
  return src(cssPath)
    .pipe(sourcemaps.init())
    .pipe(concat("style.css"))
    .pipe(postcss(cssnano())) //prefixer add karega aur minify karega css ko
    .pipe(sourcemaps.write("."))
    .pipe(dest("dist/assets/css"));
}

//it will run functions after some intervals to check changes
function watchTask() {
  watch([imgTask, jsPath], { interval: 1000 }, parallel(imgTask, jsTask));
}

exports.cssTask = cssTask;
exports.jsTask = jsTask;
exports.imgTask = imgTask;
exports.copyHtml = copyHtml; //it will make private call to this function
exports.default = series(parallel(copyHtml, imgTask, jsTask)); //by default it will run all the function
