// CONVERSION AN OPERATION-
let score = 33
console.log(typeof score);

// Convert into number-
let Score = "33"
let convert = Number(Score);
console.log(convert);
// now for example a value is "33abc" and you convert it to a number it will be converted but it is error bcz abc is also present.
// "33" => 33
// "33abc" => NaN (Not a number)
// "True/False" => 1/0
// "Null" => NaN

// Convert into Boolean
let Bool = 1
let Convert = Boolean(Bool)
console.log(Convert)
// For 1=> true; 0=> false
// "" => False
// "Hammad" => true

// Convert to String
let number = 33
let NumberToString = String(number)
console.log(NumberToString);
console.log(typeof NumberToString);