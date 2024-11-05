// DATES
let myDates = new Date()
console.log(myDates);
console.log(myDates.toString());
console.log(myDates.toISOString());
console.log(myDates.toLocaleString());

let myDate = new Date(2024 ,0 ,14) // In JS months start from zero.
console.log(myDate.toDateString());

let MYDATE = new Date(2024, 0, 16, 7 , 8) // In this 7 and 8 are  hours and minutes respectively.
console.log(MYDATE.toLocaleString());


                    // INTERVIEW QUESTION
    console.log(typeof  myDates); // It is an object
    console.log(Date.now()); // Exact time now in miliseconds
    console.log(Date.now()/1000); // Converted into Seconds but in decimals
    console.log(Math.floor(Date.now()/1000)); // converted to Seconds without decimals
    
    
    

    

