const coding=["js","ruby","java","cpp","python"]

// coding.forEach(  function(item){
//     console.log(item);
// })

// coding.forEach ((item)=>{
//     console.log(item);
// })

function printMe(item){
    console.log(item);
}

coding.forEach(printMe)

const myCoding=[
    {
        language:"javascript",
        languangefilename:"js"
    },
    {
        language:"java",
        languangefilename:"java"
    },
    {
        language:"python",
        languangefilename:"py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.language);
})