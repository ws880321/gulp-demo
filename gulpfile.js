var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var seajsCombo = require('gulp-seajs-combo');

// sass
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
// js-seajs
gulp.task('seajscombo', function(){
    return gulp.src('src/js/index/main.js')
        .pipe(seajsCombo())
        .pipe(gulp.dest('dist/js/index/'));
}); 
// 默认任务
gulp.task('default', function(){
    gulp.run('sass');
    gulp.run('seajscombo');

   // 监听文件变化
	gulp.watch('src/scss/*.scss', function(){
	    gulp.run('default');
	});
});
