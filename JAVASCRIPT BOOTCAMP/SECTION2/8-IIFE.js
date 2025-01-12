                 // Immediately Invoked Functions Expressions (IIFE)
// Immediately Invoked Functions Expressions (IIFE) are functions that are defined and called immediately.
// They are useful for creating a scope for variables and functions that should not be accessible from the outside

//                         INTERVIEW QUESTION: WHAT IS IIFE?
// Global scope kai pollution se problem hoti hai kayi baar . Us pollution ko hatane kai liye IIFE ka use kiya jata hai . IIFE ek function hai jo apne aap execute hota hai
 
// SYNTAX: Wrap the wholle function into () and then place another () around it.
(function one(){
    console.log("DB CONNECTED");
})();

(function two(){                    // to write another IIFE place a semicolon at the end of the previous IIFE.
    console.log("Again Connected");
    
})();

// To exucte some special code
(function three(name){
    console.log(`Special Code ${name}`);
})(`Hammad`);

// IN ARROW FUNCTION
( (name) => {
    console.log(`Special Code ${name}`);
})(`Hammad`)