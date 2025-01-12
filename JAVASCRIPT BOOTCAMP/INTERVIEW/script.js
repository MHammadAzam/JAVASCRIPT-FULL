
console.log(!"hammad"); // False
console.log(+false);// 0

console.log("" == false);// True because of the loose equality operator.
console.log("" === false); // False  because of the strict equality operator.

console.log(NaN == NaN); // False
console.log(NaN === NaN);// False

console.log(1 + false); // 1

console.log(typeof typeof 1000);// String

const arr = [1, 2, 3, 4, 5, 6];
arr[10] = 100
console.log(arr); // [1,2,3,4,5,6,<4 empty items>,100]

function funct(){
   
    xyz = 100
    console.log(xyz);
    
}
console.log(funct());
 


