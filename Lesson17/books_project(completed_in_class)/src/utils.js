export function arrToMap(arr) {
    return arr.reduce((acc, item)=> {
        acc[item,_id] = item
        return acc;
    },{})
}

export function mapToArr(obj) {
    return Object.keys(obj).map(key => ob[key])
}