// Q#1
let marks ={
    harry : 90,
    hammad: 94,
    salman: 73,
    shoaib: 32
}
for(let i = 0; i<Object.keys(marks).length; i++){
//    console.log("THE MARKS OF", Object.keys(marks)[i] ," ARE: ", marks[Object.keys(marks)[i]]);
   
}

// Q#2
let marks1 ={
    harry : 90,
    hammad: 94,
    salman: 73,
    shoaib: 32
}
for(let i in marks1){
    console.log("THE MARKS OF", i ," ARE: ", marks1[i]);
}

// Q#3   ask user to enter a number until it matches with the correct number.
let correct_number = 4
let Guess_number

while(Guess_number != correct_number){
    //  Guess_number= prompt("Enter a number ")
}
console.log("You have enterd a correct number");

// Q#4

let mean = (a,b,c,d,e) => {
    return (a+b+c+d+e)/5
} 
console.log(mean(1,2,3,4,5));


// Q#5 STRINGS
console.log("har\" ".length); // will print 4

// Q#6
let str = "hello world"
let find = "hello"
console.log(`The word ${find} ${str.includes(find) ? "is ": "is not "} found in the string`);

console.log(str.startsWith(find));
console.log(str.startsWith("rld"));

// Q#7
let str1= "HAMMAD"
console.log(str1.toLowerCase());

// Q#8
let str2 = "The amount is Rs 1000"
let amount = str2.slice("The amount is".length)
console.log(amount); // it will slice the portion leaving only amount is Rs 1000.

// Q#9
let friend = "Naruto"
console.log(friend.replace("N", "S"));

// Q#10 ARRAYS
let array1 = [1,2,3,4,5,6,7,8]
array1.push(20,23,24,25)
console.log(array1);

// Q#11
let array2 = [1,2,3,4,5,6,7,80]

let ab = array2.filter((value)=>{
     return (value%10===0)
})

// Q#12
let array3 = [1,2,3,4,5,6,7,8]

let Map = array3.map((value)=>{
    return (value*value)
})
console.log(Map);

// Q#13 factorial
let array4 = [1,2,3,4,5,6,7,8]

let bc = array4.reduce((x1,x2)=>{
    return x1*x2
})
console.log(bc);

// Q#14 BOM AND DOM

let user = prompt("Enter your age")
user = Number.parseInt(user)
if(user >= 18){
    alert("You can drive")
}
else{
    alert("You can't drive")
}

// Q#15 Change color based on the user prompt
let color = prompt("Enter the color you want to show on browser")
document.body.style.backgroundColor = color;















