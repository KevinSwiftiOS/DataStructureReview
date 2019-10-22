//flatten函数 将多维函数变成一维函数
function flatten(arr) {
    console.log("tet");
    let arrs =[...arr]
    let newArr = [];
    while (arrs.length) {
        let item = arrs.shift()
        if(Array.isArray(item)){
            arrs.unshift(...item)
        }else {
            newArr.push(item)
        }
    }
    return newArr
}
console.log(flatten([[1,2,3],[4,5,6]]));
