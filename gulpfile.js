var gulp = require("gulp");
var uglify = require("gulp-uglify"); 
var concat = require("gulp-concat");

//minify JavaScript
function minify() {
    return gulp.src(["wwwroot/js/**/*.js"])
        .pipe(uglify())
        .pipe(concat("dutchtreat.min.js"))
        .pipe(gulp.dest(("wwwroot/dist/"));
}
//minify CSS




exports.default = minify;