'use strict'
/* function foo (mustBeProvieded = '123') {   //es6中可以使用默认值来提供参数
    // if(!arguments.length)
    //     throw new Error('必须传参');
    return mustBeProvieded;
} */

//es6参数赋初值


function mandatory() {
    throw new Error('MIissing parameter')
}

function foo(mustBeProvieded = mandatory) {   //es6中可以使用默认值来提供参数
    return mustBeProvieded;   //函数参数赋了默认值
}

foo('123d4')



const arr = ['a', 'b', 'c']
//arr.forEach((ele,index)=>{
// console.log(`index=${index},ele=${ele}`)
//})


let i = 0
for (let ele of arr) {
    console.log(`元素:$(ele),下标:${i}`)
}



/*  for(const [index,ele] of arr.entries()){
    //console.log(newArr)
    console.log(`下标:${index} 元素:${ele}`)
 }
 */

let a = 2,
    b = 3
    [a, b] = [b, a]  //ES6的解构，完成交换



