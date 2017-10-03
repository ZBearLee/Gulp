//任务的总管
//commonJs
var gulp=require('gulp')
//var stylus=require('gulp-stylus')

var postcss = require('gulp-postcss');
var processorsArray = [
    require('autoprefixer')(
        {
            browsers:['last 2 versions',
             'ie 6-8', 'Firefox > 20']
        }
    )
]



/* gulp.task('one',function(){
    //找到这个文件/文件夹
    return gulp.src('./css/one.styl')
    //.src为找到来
    //传送到管道之中
    .pipe(stylus({
        //compress:true
        linenos:true //行的信息
    }))
    .pipe(gulp.dest('./css/build'))
    //.dist 输出去
    //.pipe将两者链接起来
})


gulp.task('copy-index',function(){
    return gulp.src('./index.html')
    .pipe(gulp.dest('./build/'))
}) */




gulp.task('styles', function() {
    return gulp.src('./css/one.css')
        .pipe(postcss(processorsArray))    //processorsArray接受预处理的数组
        .pipe(gulp.dest('./build/'))
});
    
    
    
    
    
    
    
    
    
 




