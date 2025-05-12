const name="Shivangi"
const count=4

console.log(`Hello my name is ${name} and my repo count is ${count} `);

const gameName= new String("fallguys")//declaring string

console.log(gameName[0]);//accessing string through index value
console.log(gameName.length);//finding total length of the string
console.log(gameName.toUpperCase());//to upper case

console.log(gameName.__proto__);//{}
console.log(gameName.charAt(2));//find character according to index value
console.log(gameName.indexOf('t'))//-1 means no t in string

const newString= gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,3)
console.log(anotherString);

const aString = gameName.slice(-8,7)
console.log(aString);

const hello="  ROMA "
console.log(hello);
console.log(hello.trim);//remove empty spaces

const url="https://roma.com/roma%20hkl"
console.log(url.replace('%20','-'));

console.log(url.includes("roma"));

console.log(gameName.split('-'));
//many more methods