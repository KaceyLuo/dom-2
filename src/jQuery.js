window.$=window.jQuery = function (selectorOrArray) {
    let elements
    //通过if语句可以更改elements
    if (typeof selectorOrArray === 'string') {
        elements = document.querySelectorAll(selectorOrArray)

    } else if (selectorOrArray instanceof Array) {
        elements = selectorOrArray

    }
    //api可以操作elements
    //const api = {  //自己声明的api 可以直接return
    return {
        //遍历所有获取的元素 并给他们添加名称
        addClass(className) {
            //闭包 函数访问外部的变量
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.add(className);
            }
            return this//return api就可以实现链式操作
            //this就是api
        },
        //找到指定的元素
        find(selector) {
            let array = []
            for (let i = 0; i < elements.length; i++) {
                const elements2 = Array.from(elements[i].querySelectorAll(selector))
                array = array.concat(elements2)
            }
            array.oldApi = this//this就是api
            return jQuery(array)
            //等价于 const newApi=jQuery(array)
            // return newApi
        },
        //遍历当前的元素
        each(fn) {
            for (let i = 0; i < elements.length; i++) {
                fn.call(null, elements[i], i)
            }
            return this
        },
        //获取一个元素的父亲
        parent() {
            const array = []
            this.each((node) => {
                if (array.indexOf(node.parentNode) === -1) {
                    array.push(node.parentNode)
                }
            })
            return jQuery(array)
        },
        print() {
            console.log(elements)
        },
        //获得一个元素的孩子
        children() {
            const array = []
            this.each((node) => {
                array.push(...node.children)//...把node里面的元素拆开 把第一个元素当作第一个参数

            })
            return jQuery(array)
        },
        //当选中子元素时退回到他的父元素
        oldApi: selectorOrArray.oldApi,

        end() {
            return this.oldApi //这里的api是api2
        }
    }
    //return api;

}
