//Objects 

const tinderUser=new Object()//singleton
const tinder={}//non singleton

tinder.id='123abc'
tinder.name="Shiv"
tinder.isLoggedIn=false

console.log(tinder);

const regularUser={
    email: "some@what.com",
    fullname:{
        firstname: "Prakash",
        lastname: "Singh"
    }
}

console.log(regularUser.fullname.firstname);
console.log(regularUser["fullname"]["firstname"]);

const obj1={1:"a", 2:"b"}
const obj2={3:"a", 4:"b"}

// const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2)
const obj3=Object.assign(obj1,obj2)
console.log(obj3)

const obj4={...obj1, ...obj2}//spread method
console.log(obj4)

const users = {

}

console.log(Object.keys(tinder));
console.log(Object.values(tinder));
console.log(Object.entries(tinder));

console.log(tinder.hasOwnProperty('isLoggedIn'));



const course={
    Cname:"hindi",
    Cprice:"999",
    Cinstructor:"hitesh"
}

const {Cinstructor}= course//destructure method

console.log(Cinstructor);





