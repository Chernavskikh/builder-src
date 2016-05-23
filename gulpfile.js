var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var concatCss = require('gulp-concat-css');//css
var csso = require('gulp-csso');//минификатор
var prefix = require('gulp-autoprefixer');
var concat = require('gulp-concat');//js
var uglify = require('gulp-uglify');//min

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('css', function () {
  return gulp.src('css/*.css')
    .pipe(concatCss("build.min.css"))
    .pipe(prefix({
			browsers: ['last 2 versions','ie 9'],
		}))
    .pipe(csso({
            restructure: false,
            sourceMap: true,
            debug: true
        }))
    .pipe(gulp.dest('build/'));
});

gulp.task('js', function() {  
    return gulp.src('js/*.js')
        .pipe(concat('build.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./build'))
});

gulp.watch('./sass/styles.scss', function(event) {  
    gulp.run('sass');
    console.log('seen');
});

gulp.task('default', ['sass']);