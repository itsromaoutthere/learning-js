//for

for (let index = 0; index <=10 ; index++) {
    const element = index;
    if (element==5){
        console.log("5 is best")
    }
    console.log(element);    
}

// for (let i=0; i<= 10; i++){
//     console.log(`outer loop value : ${i}`)
//     for (let j=0; j<=10; j++){
//       console.log(`inner loop valu ${j} and inner loop ${i}`);
//     }
// }

for(let i=1;i<=10;i++){
    console.log(`table of ${i}:`);
    for(let j=1;j<=10;j++){
        console.log(`${i} * ${j} : ` + i*j);
    }
}


//keywords

let myArray = ["flash","batman","superman"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

//break and continue

for (let index = 1; index <= 20 ; index++) {
    if (index==5){
        console.log("5 is detected");
        break;
    }
    console.log(`value of i is ${index}`);
}

for (let index = 1; index <= 20 ; index++) {
    if (index==5){
        console.log("5 is detected");
        continue;
    }
    console.log(`value of i is ${index}`);
}
