//加载组件
var gulp = require('gulp'),
    connect = require('gulp-connect');






gulp.task('localhost',function(){
    connect.server({
        root:'./',
        port:9102
    });

});


gulp.task('default', ['localhost']);