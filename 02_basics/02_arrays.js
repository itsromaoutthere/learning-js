
const marvel=["thor","ironman","spiderman"]
const dc=["flash","superman","batman"]

//marvel.push(dc)
console.log(marvel);

const allHeros=marvel.concat(dc)
console.log(allHeros);

const all_new=[...marvel, ...dc];
console.log(all_new);

const ano_arr=[1,2,3,[4,5,6,7],7,[8,9,6,[2,3]]]

const real_ano_arr= ano_arr.flat(Infinity)
console.log(real_ano_arr);

console.log(Array.isArray("Jay"));
console.log(Array.from("Jay"));
console.log(Array.from({name:"Jay"}));

let score1=100
let score2=200
let score3=300
let score4=400

console.log(Array.of(score1,score2,score3,score4));

