import {stringify} from "querystring";

class Point {
    public x: number
    public y: number
    constructor(x:number, y:number) {
        this.x = x
        this.y = y
    }
    public getPosition() {
        return `(${this.x}, ${this.y})`
    }
}

const point = new Point(2,2)
console.log(point.getPosition())

/** 修饰符
 *  public 公共，实例可以访问
 *  private 私有
 *  protected 受保护的，在继承该类的子类中可以访问到
 *  readonly 设置为只读
 */

class Parent2 {
    private name: string
    constructor(name:string) {
        this.name = name
    }
}

const parent2 = new Parent2('Tom')

// console.log(parent2.name) // Property 'name' is private and only accessible within class 'Parent2'.

class X {
    // private age: number
    public readonly name: string
    protected age: number
    constructor(age: number, name: string) {
        this.age = age
        this.name = name
    }
    public run() {
        alert('hahahah')
    }
    protected getAge() {
        alert(this.age)
    }
}

class Y extends X {
    constructor(age: number, name: string) {
        super(age, name)
    }
}
const x = new Y(19, 'Tom')
const y = new X(18, 'tom')

// y.name = 'ahaah' // Cannot assign to 'name' because it is a read-only property.

class A {
    // 既指定了name类型，也会把name放到实例上
    constructor(public name: string) {
        this.name = name
    }
}

const a = new A('Jim')

console.log(a.name)

class Info {
    public name: string
    public age: number
    private infoString: string = 'Kate : 18'
    constructor(name: string, age: number, public sex?: string) {
        this.name = name
        this.age = age
        this.sex = sex
    }
    get infos() {
        return this.infoString
    }
    set infos(value: string) {
        console.log(`setter ${value}`)
        this.infoString = value
    }
}

const info = new Info('Tom', 18)
console.log(info.infos)
info.infos = 'haha : 12'
console.log(info.infos)

// abstract 抽象类 不能直接创建类，只能被类继承

abstract class People {
    constructor(public name: string) {
        this.name = name
    }
    public abstract printName():void
}

// const people = new People('haha') // Cannot create an instance of an abstract class.

class D extends People {
    constructor(name: string) {
        super(name)
    }
    public printName() {
        console.log(this.name)
    }
}

const d = new D('TT')
d.printName()

// abstract class Human {
//     public abstract name: string
//     abstract get insideName(): string
//     abstract set insideName(value: string)
// }
//
// class H extends Human {
//     public name: string
//     public insideName: string
// }

// 接口检测的是类创建的实例上的属性
// 类实现接口

interface FoodClass {
    name: string
}

class F implements FoodClass {
    public name: string
    constructor(name: string) {
        this.name = name
    }
}

// 接口继承类，会继承类的成员但是不包括实现，继承成员及属性

class Z {
    protected name: string
    constructor(name: string) {
        this.name = name
    }
}

// interface I extends Z {
//     name: string
// }
//
// class G extends Z implements I {
//     public name: string
//     constructor(name: string) {
//         super(name)
//         this.name = name
//     }
// }
