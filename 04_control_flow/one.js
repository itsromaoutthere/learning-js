//If(condition){}

if(true){
    console.log("world")

}
if (false){
    console.log("hello")
}
 if(2<2){
    console.log("yes")
 }

const age=23
if (age>18){
    console.log(`eligible to vote as their age is ${age}`)
}else{
    console.log(`not eligible to vote as their age is ${age}`)
}

const balance=470
if(balance<500){
    console.log("less than 500")
}else if(balance<750){
    console.log("less than 750")
}else{
    console.log("low balance")
}


const userLoggedIn=true
const debitCard=true

if (userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy course")
}

if (userLoggedIn || debitCard ){
    console.log("don't Allow to buy course")
}
