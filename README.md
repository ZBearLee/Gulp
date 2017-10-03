# 前端工作流Gulp

    工作流是业务过程的自动化，前端工作流，就是把前端业务中的一些工作用计算机工具自动完成。
 Gulp 则是一种前端工作流的工具，它可以解决前端中很多其实并不需要人力参与的工作。
 
 ## 安装和使用
 ```
 cnpm install -g gulp         //全局安装gulp
 yarn add gulp
 yarn add gulp-stylus        //在需要编译stylus的项目中引入
 yarn add gulp-ruby-sass    //在需要编译sass的项目中引入
 yarn add gulp-postcss      //在需要编译postcss的项目中引入
 stylus css/one.styl -o css/one.css //转换
 gulp.task()            //建立任务
 gulp                 //执行gulp命令，完成gulp的任务
 ```
 
