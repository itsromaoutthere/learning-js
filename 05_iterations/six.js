const coding=["js","ruby","java","cpp","python"]

const values=coding.forEach((item)=>{
    console.log(item);
})
console.log(values)//will always be undefined

const myNums=[1,2,3,4,5,6,7,8,9]
// const newnums=myNums.filter((num)=>num>4)

// const newnums=myNums.filter((num)=>{
//     return num>4;
// })
const newnums =[]
myNums.forEach((num)=>{
    if (num>4){
        newnums.push(num)
    }
})
console.log(newnums);

