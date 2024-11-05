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
