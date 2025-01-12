
// ARRAYS------------COLLECTION OF ELEMENTS OR DATA OF SAME TYPES STORED IN A SINGLE VARIABLE.

// makes our code easier if we have multiple variables.

let arr = ["Peshawar", "Islamabad", "Multan", "Lahore", "hyderabad"];

console.log(arr[0]);
// ALSO---

for(let a = 0; a<=4; a++){

    console.log(arr[a]);   // Simple way to call elements of an array.
}

for (let a = 0 ; a < arr.length ; a++){ // .Length is also used to simply print the array elements.

    console.log(arr[a]);
}


// OBJECTS----------COLECTION OF PROPERTIES OR DATA WHICH IS REPRESENTING A SINGLE ENTITY.
// IN JAVASCRIPT WE CAN CREATE AN OBJECT WITHOUT A CLASS.

let student1 = {
     Name : " Hammad",
     age : 21,
     city : " Peshawar"
}

let student2 = {
    Name: " Ali",
    age : 22,
    city:"peshawar"
}

console.log(student1.Name); // Objects are called by a (DOT.)
console.log(student2.city); // Objects are called by a (DOT.)