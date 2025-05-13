//Functions

function addNum(num1,num2){ //parameters
    console.log(num1+num2);
}

addNum(23,45)//arguments

function addNum2(numb1,numb2){ 
        return numb1+numb2;
}

console.log(addNum2(23,45))

function loginusermsg(username){
    if(username==undefined){// or if(!username)
        console.log("Please enter name")
        return
    }
    return `${username} just logged in`
}

console.log(loginusermsg("suraj"));

function calculatecartprice(...num1){
    return num1
}

console.log(calculatecartprice(200,400,500,2000))

const user={
    name:"disha",
    price:199,
    age:18
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`)
}
handleobject(user)
handleobject(
    {
        name:"ari",
        price:234
    }
)

const mynewarr=[200,400,600]

function returnSecondValue(getarray){
    return getarray[1]
}
console.log(returnSecondValue(mynewarr))