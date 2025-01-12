// OBJECTS 
const jsUser = {
    name: "Hammad",
    age: 25,
    "Full name":"Muhammad Hammad", // This cant be accessed by dot notation so use bracket notattion.
    location: "Peshawar",
    Email: "mhammadazam1@google.com",
    isLoggedIn : false,
    LastLoggedIn: ["Monday ", "Saturday"] 
}
//FOR CALLING OBJECTS 2 METHODS ARE USED
//1. dot notation
console.log(jsUser.name);

//2. bracket notation
console.log(jsUser["Full name"]);

// INTERVIEW QUESTION
// TAKE A SUMBOL AND THEN PRINT IT
const sym = Symbol("key1")
const  obj = {
      [sym]: "value1" // Correct way to use symbol i.e in Square brackets
}
console.log(obj[sym]);

// TO CHANGE A DATA OF AN OBJECT USE.
jsUser.Email = "Mhammadazam@chatgpt.com" // Email changed

// To Lock a Value so that it cant be changed in future use.
Object.freeze(jsUser); // This will lock the object so no value can be changed in future.
jsUser.Email = "hammadgharja@gmail.com"
console.log(jsUser);




