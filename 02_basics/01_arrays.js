//Arrays

const myArr=[0,1,2,3,4,5]
console.log(myArr[5]);

const myArr2=new Array("a","b","c")
console.log(myArr2)

//Array Methods

myArr.push(6)
myArr.pop()

myArr.unshift(9)
myArr.shift()

console.log(myArr.includes(9))
console.log(myArr.indexOf(4))

const newArr = myArr.join()//converts it into string

console.log(typeof newArr);


//splice and slice

console.log("A ",myArr)
const nyn1 = myArr.slice(1,3)
console.log("B ",myArr);
console.log(nyn1)

const nyn2 = myArr.splice(1,3)
console.log("C ",myArr);
console.log(nyn2);





