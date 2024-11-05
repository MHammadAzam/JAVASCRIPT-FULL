// IF CASE
let connection = 3;
if(connection === 5){

    console.log("Fetch sattelite data");
}
else{
    console.log("log out");
}

// IF AND ELSE-IF
let percentage = 67;

if(percentage>= 70){

    console.log("A Grade");
}
else if(percentage===67){
    
    console.log("B Grade");
}
else{

    console.log(" C Grade");
}


// SWITCH CASE------Speed wise (switch case) is must faster than (If case)......if you want to simple check tha values if its either 1,2 or other Go For Switch Case...
let statusVal = 2;
switch(statusVal)
{
    case 1:{
        console.log("Super User");
        break;
    }
    case 2:{
        console.log("medium user")
        break;
        // in switch case by default whatever the case is correct all the other cases after it will also be executed, this concept is called as------------ FALL OUT STATEMENT.
    }
    default:{
        console.log("Low User");
    }
}