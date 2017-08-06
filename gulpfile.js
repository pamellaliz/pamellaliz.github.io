var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

//Sass variables
var input = './sass/*.scss';
var output = './css/';
var sassOptions = {
	errLogToConsole: true,
	outputStyle: 'expanded'
};

gulp.task('sass', function () {
	return gulp
	.src(input)
	.pipe(sourcemaps.init())
	.pipe(sass(sassOptions).on('error', sass.logError))
	.pipe(autoprefixer({ browsers: ['last 3 versions'] }))
	.pipe(cssnano())
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest(output))
});//End task sass

gulp.task('watch', function() {
	return gulp
	.watch(input, ['sass'])
	.on('change', function(event) {
	console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	});
});//End tastk watch

gulp.task('default', ['sass','watch']);