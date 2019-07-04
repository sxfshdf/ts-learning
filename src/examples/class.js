function Point(x, y) {
    this.x = x
    this.y = y
}

Point.prototype.getPosition = function() {
    return '(' + this.x + ',' + this.y + ')'
}

var point1 = new Point(1, 2)

console.log(point1.getPosition())

class Point1 {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    getPosition() {
        return `(${this.x}, ${this.y})`
    }
}

const p2 = new Point1(1,3)
console.log(p2.getPosition())


class Man {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    static say() {
        console.log('hello')
    }
}


const man = new Man('tom','18')

// 继承

function Human(name) {
    this.name = name
}

Human.prototype.run = function() {
    console.log("I'm" + this.name + ", I can run!")
}

function Man1(name) {
    Human.call(this, name)
    this.gender = 'man'
}

Man1.prototype = new Human()


const man1 = new Man1('Tom')

man1.run()

class Parent {
    constructor(name) {
        this.name = name
    }
    sayHello() {
        console.log('hello, I am ' + this.name + '!')
    }
}

class Child extends Parent {
    constructor(name, age) {
        super(name)
        this.age = age
    }
}

const child = new Child('Tom', 18)

child.sayHello()
