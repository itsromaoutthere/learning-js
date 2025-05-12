//Number

const score=400
console.log(score)
console.log(typeof score);

const balance=new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const num=23.5678
console.log(num.toPrecision(3))

const hundreds = 10000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));

Number.EPSILON
Number.MAX_VALUE//many more methods

// ++++++++++++++++ Maths +++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.68));//5
console.log(Math.ceil(4.68));//5
console.log(Math.floor(4.68));//4
console.log(Math.max(4, 3, 6, 8));
console.log(Math.min(4, 3, 6, 8));


console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.random()*10);

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)



