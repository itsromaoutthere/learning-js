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

//Nested scopes

function one(){
    const username = "Suraj"

    function two(){
        const website ="youtube"
        console.log(username);
    }
    //console.log(website); //ERROR

    two()
}

one()

if (true){
    const username = "hello"
    if (username === "hello"){
        const website="youtube"
        console.log(username+website);
    }
    //console.log(website);//ERROR

}

//console.log(username);//ERROR

//suppose
function addOne(num){
    return num + 1
}
console.log(addOne(5));


const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5))

