interface Nameinfo {
    firstName: string,
    lastName: string
}

const getFullName = ({firstName, lastName}: Nameinfo): string => {
    return `${firstName} ${lastName}`
}

console.log(getFullName({
    firstName: 'Lison',
    lastName: 'haha',
}))

interface Vagetable {
    color?: string,
    type: string,
    [prop: string]: any
}

const getVagetable = ({color, type}: Vagetable) => {
    return `A ${color ? color + ' ' : ''}${type}`
}

console.log(getVagetable({
    type: 'tomato',
    color: 'red',
}))

console.log(getVagetable({
    type: 'tomato',
    color: 'red',
    size: 2,
} as Vagetable))

console.log(getVagetable({
    type: 'tomato',
    color: 'red',
    size: 2,
}))

const vagetable = {
    type: 'tomato',
    color: 'red',
    size: 2,
}

console.log(getVagetable(vagetable))

// 接口继承

interface Vagetable1 {
    name: string,
}

interface Carrot extends Vagetable1 {
    color: string
}

interface Tomato {
    radius: number
}

const carrot: Carrot = {
    color: 'red',
    name: 'carrot',
}
