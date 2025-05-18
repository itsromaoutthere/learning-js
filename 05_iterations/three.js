//for of
//["","",""]
//[{},{},{}]

const arr=[1,2,3,4,5]
for(const num of arr){
    console.log(num);
}

const greetings="hello world!"
for(const greet of greetings){
    console.log(greet);

}

//maps:it is not iterable

const map = new Map()
map.set('IN',"India")
map.set('USA',"united staes of america")
map.set('F', "france")

console.log(map);

for(const [key, value] of map){
    console.log(key + ":-" + value)
}
