var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

gulp.task('sass', function() {
  return sass('src/scss/main.scss', {
    style: 'compact',
    compass: true,
    noCache: false
  })
    .on('error', function(err) {
      console.error('Error!', err.message);
    })
    .pipe(gulp.dest('dist/css'))
});

// 默认任务
gulp.task('default', function(){
    gulp.run('sass');

   // 监听文件变化
	gulp.watch('src/scss/*.scss', function(){
	    gulp.run('default');
	});
});
