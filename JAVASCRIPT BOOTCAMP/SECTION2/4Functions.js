
  // DIFFERNCE BETWEEN "LET" AND "VAR"...........
  // var is function scoped---------whatever you create using VAR it will be accesible in whole function.
  // let is block scoped------------if you make a variable using LET it will not accesible in whole function.

  
    function dummy(){
       let a = 1;  // USE LET VARIABLE IN JAVASCRIPT.
        if(true){
              // var a= 1; // USING VAR it is accessible outside the if statement as well but in let case it wont be acccesible.
              // let a=1;  // it will show error. so you should declare variable outside if statement.
        }
        console.log(a);
    }
    dummy();


  // FUNCTIONS........BLOCK OF CODE WHICH DOESNT CALL AUTOMATICALLY
    
   function student(name)    // student=()=> {    }  this is also a way of defining a function called ARROW FUNTION...
    {
       let Name = ("hi  " , name)
       return Name
    }
 
   let result = student("Hammad");
   console.log(result);
   


   function onePlusAve(a, b){
        return 1 + (a+b)/2   
   }
   console.log(onePlusAve(2,20));  
   console.log(onePlusAve(3,20));  
   console.log(onePlusAve(4,20));
   console.log(onePlusAve(5,20));
    
   