  // LOOPS ( Set of code which executes itself again and again based on a condition)
// (1) WHILE LOOP

  let a = 1;
  while( a>1){

    console.log("Lets upgrade"); // First checking condition then executing code.
  }

// (2) DO-WHILE LOOP
  do{
        
       console.log("Hello"+a);
       a++;
  
      } while(a < 10) // First code is run and then condition is checked


// (3) FOR LOOP
   for(let a = 1; a<10 ; a++){

    if(a==4)
      {
          break; // After reaching 4 it wil break the loop and loop will be terminated.
      }
      if(a==5)
      {
         continue; // After reaching 5 it will continue means it will just skip the code at Point 4 will move forward to 5.
      }
    console.log("HELLO WORLD"+a);
   }

//  FOR LOOP ON ARRAY
  let arr = ["flash" , "Naruto", "Eren"]
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
    
  }

// 4) FOR-OF LOOP::::::: Used to apply loop on array.
  let array = ["flash" , "Naruto", "Eren"]
  for (const num of array) {
         console.log(num);
         
  }

  
// 5) FOR-IN LOOP ::::::: Used to apply loop on object.
  const person = {
    name:"Flash", 
    age: 25, 
    city:"New York"
  };
  for (const key in person) {
    // console.log(key);
    
  }
  
// 6) FOR-EACH LOOP
  const coding = ["java", "python" , "cpp" , "Ruby", "Js"]
  coding.forEach( function (val) {
      // console.log(val);
  });
                    //  OR
  coding.forEach( (val) => {
     console.log(val)
  })           

                   //  OR
numbers.forEach( (num) => {    // If curly braces are on then u have to return value otherwise if it is in single line no need to return
         console.log(num + 10)
  })
//********************************************************************************************************************************* */ 

// 7) FILTER OPERATION::::::: used to apply on numbers
  const numbers = [1, 2, 3, 4, 5, 6,7,8,9]
  // numbers.filter( (num) => num > 4)         // WE WANT NUMBERS GREATER THAN 4, it will show error if we run it like that.
  const Mynum = numbers.filter( (num) => num > 4)
  console.log(Mynum)

  
// MAPS

const map = new Map()
map.set('PK', 'Pakistan')
map.set('Fr', 'France')
map.set('Aus', 'Australia')

console.log(map)