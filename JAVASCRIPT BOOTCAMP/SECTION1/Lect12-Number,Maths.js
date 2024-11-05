// Numbers
const balance = 100
console.log(balance); // Simple output of the balance variable

const score = new Number(400) // It shows the Number property also in output
console.log(score);  

console.log(score.toFixed(2)); //  Output: 400.00
console.log(score.toString.length); // first number will be connverted to String and then it will show its length.

const Value = 23.896 // Precison focus on the values to the left side ofthe decimal point.
console.log(Value.toPrecision(3))

// console.log(Value.toExponential(6))

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-PK'));
//****************************************************************************************************************** */

// MATHS
console.log(Math.abs(-12)) // abs property changes negative number to positive but positive number remains the same
console.log(Math.round(4.7)) // This property Rounds off the number
console.log(Math.ceil(4.1)) // ceil means  ceiling, it will round off the number to the nearest higher integer.
console.log(Math.floor(4.9)) // floor means  floor, it will round off the number to the nearest lower integer.
console.log(Math.sqrt(25)); // Takes square-root of a given number.
console.log(Math.min(2, 5, 6, 9, 10)); // finds min value in an array
console.log(Math.max(2 , 5 , 6 , 9 , 10)); // finds max value in array

                    //   IMPORTANT
const min = 10
const max = 20

// Suppose a random value i.e(0.1) is selected, math.floor() is used to make that (0.1) value to (0),then to avoid (0) we add (+ 1) to it. Then max - min will give us the range of values we want to generate. and +min will give us that minimum should be the value of minimum given above.

console.log( Math.floor(Math.random() * (max - min + 1)) + min); // generates random number between min




