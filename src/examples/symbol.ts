const s1 = Symbol()

const s2 = Symbol()

console.log(s1,'s1')
console.log(s2, 's2')

let prop = 'name'
let obj = {
    [prop]: 'lison'
}

console.log(obj)

const s3 = Symbol('name')
const obj1 = {
    [s3]: 'Lison',
    age: '18',
    sex: 'man'
}
console.log(obj1)

// 以下四种方法遍历不到 symbol 属性名

for(let key in obj1) {
    console.log(key)
}

console.log(Object.keys(obj1))

console.log(Object.getOwnPropertyNames(obj1))

console.log(JSON.stringify(obj1))

// 获取到 symbol 属性名方法

console.log(Object.getOwnPropertySymbols(obj1))

console.log(Reflect.ownKeys(obj1))

// Symbol.for() Symbol.keyFor()

const s4 = Symbol.for('name')
const s5 = Symbol.for('name')
console.log(s4, s5)

console.log(Symbol.keyFor(s4)) // name


Symbol.hasInstance
