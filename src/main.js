//const api = jQuery('.test') //不会返回元素们，返回api对象
//jQuery('.test')
// api.addClass('red')
//     .addClass('blue')//链式操作
//const x1 = jQuery('.test').find('.child')
//console.log(x1)//这里的x1不能链式操作 因为array是一个数组 如果x1.addclass('red')只会在test上出现red

// const api1 = jQuery('.test')
// const api2 = api1.find('.child').addClass('blue')
// const oldApi = api2.end().addClass('yellow')

//const x = jQuery('.test').find('.child')
//x.each((div) => console.log(div))//形参名div 也可以取其他的名字

const x = jQuery('.test')
x.parent().print()