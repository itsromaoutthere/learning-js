//Scopes: Block, Function and Global

//var keyword cannot have block scope
let a=10
const b=20

if(true){
    let a=19

    let c=30 //
    console.log("inner:",a);
}

console.log(a);
console.log (b);

