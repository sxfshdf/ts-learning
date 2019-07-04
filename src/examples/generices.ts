const getArray = (value:any, times:number = 5): any[] => {
    return new Array(times).fill(value)
}

console.log(getArray(1, 2))

const getArray2 = <T>(value: T, times: number = 5): T[] => {
    return new Array(times).fill(value)
}

console.log(getArray2<number>(123, 4).map(item => item.toFixed()))

