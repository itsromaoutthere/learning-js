//comparison: =< , >= , == , !=

console.log(2>1);
console.log(2>=1);
console.log(2!=1);
console.log(2==1);
console.log(2<1);

console.log("2">1);//avoid writing like this try to write it in same data type.
console.log(2>"1");

console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true
/*the reason is that an equality check ==
and comparisons work differently.
Comparisons convert null to a number,
treating it as 0.
*/

console.log(undefined<0);//always false



