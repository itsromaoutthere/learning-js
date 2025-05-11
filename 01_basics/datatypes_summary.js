/* 
Primitive

7 Types: String, Number, Boolean, null,
undefines, Symbol, BigInt
*/
const score=100
const dec=100.4

const temp=null
let user;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id==anotherId);//this is false because symbol stores the value differently

const BigNum= 1232n

/* 
Reference (Non primitive)

Types: Array, Objects, Functions
*/
const fruit=["mango" , "apple","lichi"];
let obj={
    name: "Roma",
    age: 19,
    fav_book: "The Alchemist"
}

const myFunction=function(){ //fuction created
    console.log("Hello World");
}
myFunction();//calling the fuction

// ***************************** MEMORY ***************//

// Stack => Primitive
//Heap => Non-Primitive

let myName="hello" //primitive so data will be stored in stack
let anotherName=myName //stack will create a copy of myName
anotherName="world" //they value will get updated

console.log(myName);
console.log(anotherName);

//data will store in heap
let userOne={
    email:"user@l.com",
    pass:123
}
let userTwo=userOne;

//In heap, the reference goes to same data so the output will be same
//There is no copy of data is created
userTwo.email="yfg@k.com";

console.log(userOne.email);//yfg@k.com
console.log(userTwo.email);//yfg@k.com
