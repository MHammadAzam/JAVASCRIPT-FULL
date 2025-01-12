// Nullish coalescing operator (??): null, undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10 // NCO is a safety check , so it will return the value on the right side of the operator if the value on the left is null or undefined.
val1 = undefined ?? 15
val1 = undefined ?? 15 ?? 20 // NCO is evaluated from left to right.

console.log(val1);

// TERNARY OPERATOR 
const Price = 200
Price > 300 ? console.log("True") : console.log("false")