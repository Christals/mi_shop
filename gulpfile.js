//引入插件
var gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin'),
    uglify = require('gulp-uglify'),
    // cssmin = require('gulp-mincss'),
    cleanCSS = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    babel = require('gulp-babel'),
    pump = require('pump');


// 压缩html
gulp.task('html', function() {
	var options = {
		removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
	};
	gulp.src('app/**/*.html')
	    .pipe(htmlmin(options))
	    .pipe(gulp.dest('dist/'));
});
// 压缩js文件
gulp.task('js', function (cb) {
    pump([
          gulp.src('app/*.js'),
          uglify(),
          gulp.dest('dist')
      ],
      cb
    );
  });
// 压缩css文件
gulp.task('minify-css', () => {
    return gulp.src('app/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('dist'));
  });

//   压缩图片
gulp.task('images', () =>
    gulp.src('app/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);

// 把es6转为es5
gulp.task('es5', () =>
    gulp.src('app/app.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('dist'))
);