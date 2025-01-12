
 // INTERVIEW QUESTION
 const User = new Object() // This is Singelton Object
 const user = {} // non-singelton object ( OUTPUT OF BOTH IS SAME i.e {} )

User.name = "Hammad"
User.id = "123abc"
User.isLoggedIn = false

console.log(User);

// OBJECTS WITHIN OBJECTS
const regularUser = {
    email: "Some2gmail.com",
    fullname:{
           userFullname: {
              Firstname : "Hammad",
              Lastname: "Azam"
           }
    }
}
console.log(regularUser.fullname.userFullname.Firstname);
//*********************************************************************************************** */
// COMBINING TWO OBJECTS
const obj1 = { 
        1: "a",
        2: "b"
}
const obj2 = {
        3: "a",
        4: "b"
}
const obj3 = {...obj1 , ...obj2} // Spread Operator
console.log(obj3);
// ************************************** INTERVIEW QUESTION ***********************************************
 console.log(Object.keys(User)); // Prints all the keys in object User and its data-type is now (ARRAY)
 console.log(Object.values(User)); // Prints all the values in object User.
 console.log(Object.entries(User)); // PRINTS ARRAY WITHIN ARRAY.
 
 
 