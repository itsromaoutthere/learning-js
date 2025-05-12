//Objects: Literals and Constructors
//singleton:not literals only in constructors

//Object Literals

const mysym = Symbol("hello")

const Jsuser= {
    name:"Rajesh",
    age: 18,
    location:"Jaipur",
    email: "rajesh@gmail.com",
    [mysym]:"hello"
};

console.log(Jsuser["email"]);
console.log(typeof Jsuser[mysym]);
console.log(typeof mysym);

Jsuser.email="rajesh@youtube.com"
//Object.freeze(Jsuser)//no changes will occur after freezing the object
Jsuser.email="rajesh@google.com"

console.log(Jsuser);

Jsuser.greeting=function() {
    console.log("Namaste Rajesh!");

}

Jsuser.greetingTwo=function() {
    console.log(`Hello Js user ${this.name}`);

}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());


