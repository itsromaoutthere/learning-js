const user={
    username: "hello",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , Welcome to Website`);
        console.log(this);
    }
}
user.welcomeMessage()
user.username="world"
user.welcomeMessage()
console.log(this);

// function chai(){
//     let username="hello"
//     console.log(this.username);
// }

// chai()

const chai = ()=>{ //arrow function
    let username="hello"
    console.log(this.username);
}
chai()

const addTwo=(num1, num2) => {
    return num1+num2
}

// const addTwo=(num1,num2)=>{return num1+num2}//explicit
// const addTwo=(num1,num2)=>(num1+num2)//implicit

console.log(addTwo(3,4))

const myArray = [2,5,3,7,8]

//myArray.forEach()

