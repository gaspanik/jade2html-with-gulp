var gulp = require('gulp')
,	jade = require('gulp-jade');

gulp.task('jade', function() {
	return gulp.src('src/*.jade')
	.pipe(jade())
	.pipe(gulp.dest('dest'));
});
	
gulp.task('default', function() {
	gulp.run('jade');
	gulp.watch('src/**', function() {
		gulp.run('jade');
	});
});