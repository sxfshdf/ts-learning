// 1. 布尔类型

// 可以一开始就赋值
let bool: boolean = false

// 先申明，后赋值
let bool2: boolean
bool2 = false
// 如果bool2值的类型不是 boolean 会报错
// bool2 = 123

// 2. 数值类型

let num: number = 123

// num = 'abc' 报错
// 支持 十进制，二进制，八进制，十六进制
num = 0b110
num = 0o173
num = 0x7b

// 3. 字符串类型

let str: string
str = 'abc'
str = `数值是${num}` // 可以使用模板字符串
console.log(str)

// 4. 数组类型

// [1, 2, 3]

// 写法1
let arr: number[]
arr = [1, 2, 3]
// arr = [5, 'abc']
// 报错 因为数组中有字符串类型

// 写法2
let arr2: Array<number>

let arr3: (string | number)[] // 类型可以是字符串和数值
arr3 = [1, 'a']


// 5. 元祖类型

let tuple: [string, number, boolean] // 指定数组的类型和length
tuple = ['a', 2, false]

// 6. 枚举类型

enum Roles {
 SUPER_ADMIN,
 ADMIN = 2,
 USER
}

console.log(Roles.SUPER_ADMIN) // 0 数值可以自己设置
console.log(Roles.ADMIN) // 2
console.log(Roles.USER) // 3
console.log(Roles[0]) // SUPER_ADMIN

// 7. any 类型  任何类型

let value: any
value = 'abc'
value = 1
value = false

let arr4: any[]
arr4 = [1, 'b']

// 8. void 类型

let consoleText = (text: string): void => {
 console.log(text)
}
let v: void
v = undefined
consoleText('我是字符串')
// consoleText(123) // 报错

// 9. null 和 undefined

let u:undefined
u = undefined
// u = 123 报错

let n:null = null


// 10. never 类型  永远不存在的值的类型 可以赋值给其他类型，但是其他类型不能赋值给 never 类型

let errorFunc = (message: string): never => {
 throw new Error(message)
} // 抛错

let infinitFunc = (): never => {
 while(true){}
} // 死循环

// let neverVariable = (() => {
//  while(true) {}
// })()
// nerverVariable 为 never 类型

// num = neverVariable // 不报错
// neverVariable = num 报错

// 11. 对象类型 object
let obj = {
 name: 'jack'
}

let obj2 = obj
obj2.name = 'rose'
console.log(obj) // rose

function getObject(obj: object): void {
 console.log(obj)
}
getObject(obj2)

// 12. 类型断言
let getLength = (target: string | number): number => {
 if((<string>target).length || (target as string).length === 0) {
  return (<string>target).length
 } else {
  return target.toString.length
 }
}