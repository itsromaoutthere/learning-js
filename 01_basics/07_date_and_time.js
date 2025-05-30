//Dates

let myDate=new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

let myCreatedDate=new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());


console.log(newDate.toLocaleDateString('default',{
    weekday:"long",
    calendar:"calendar",
    dayPeriod:"long",
    minute:"2-digit"

}));

