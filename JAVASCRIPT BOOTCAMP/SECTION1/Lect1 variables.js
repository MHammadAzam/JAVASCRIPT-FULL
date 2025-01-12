    
         console.log("Hello world"); 

         // variables
         let num1 =10;
         var num2 =24;
         const num3= 56;   // It is a variable whose value cannot be changed in the future.

         let res= num1 + num2 + num3;
         console.log(res);

         // for mentioning data type in javascript u just have to use let and any name e.g
         let name= "hammad"; //it will automatically know it is a string no need of STRING data type
         let condition= true; // same in this case due to true it knew that it is a boolean
         null;/////////////// STAND-ALONE VALUE.
         undefined;///////means we write(let school; and then we run it so value of school is not defined)
         console.log(typeof num3);/// TO KNOW THE TYPE OF DATA-TYPE(NULL IS AN OBJECT, UNDEFINED IS UNDEFINED)

         console.log(name);
         console.log("my name is "+name); // use a + to concatenate 2 sentences

         //now for many lines to add them use ``
         let mname= "Muhammad";
         let lname= "Azam";
         let statement=`my name is ${mname} middle name is ${name} last name is ${lname}`; //Called as String interpolation.

         console.log(statement);

         //literals
        //  23  
        //  ""   all called as a literals.
        //  ''
        //  []
        //  {}