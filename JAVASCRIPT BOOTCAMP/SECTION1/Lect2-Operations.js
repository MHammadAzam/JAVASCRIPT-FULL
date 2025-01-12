// Operators
//Categories of Operators.

console.log(null >= 0);// True bcz comparisons convert null into a number treating it as a 0.

// (1) Binary Operators 2 operands
    // ARITHMATIC OPERATORS +,-,*,/,%
    let num1 =10;
    let num2 =20;
    let num3 ="10"; // its a string
    const num4 = 10; 
     
    console.log(num1 + num2);

    // RELATIONAL OPERATORS >, <, <=, >=, ==, !=, ( OUTPUT WILL BE EITHER TRUE OR FALSE CALLED AS BOOLEANS)
    console.log(num1 > num2);
    console.log(num1 >=num2);
    console.log(null >= 0);// True bcz comparisons convert null into a number treating it as a 0.

    console.log(num1 + num3); // output will be 1010 bcz js converts num1 to string bcz of num3 Called TYPE CURSION.
    console.log(num1 == num3); // in double equal type cursion can be compared i.e number and string can be combined.

    // IDENTITY OPERATORS === , !==
    console.log(num1 === num3); // in triple equal number and string cant be compared (only both numbers or both strings).

    // ASSIGNMENT OPERATORS   = , += ,*= 
    num1 = num2;
    console.log(num1); // single equal used for assigning value to other number.

    // LOGICAL OPERATORS  && , || , !
    console.log(num1 == num2 &&  num2 == num4); // both should be true
    console.log(num1 == num2 ||  num2 == num4); // either one should be true
    


// (2) Unaary Operators 1 operands 
    // ++ increment, -- decrement operators
    let n = 34;
    n++; // Post increment fisrtly the operation will be performed then the value will be assigned
    console.log(n);
    n--;
    console.log(n);
    let a = ++n; // Pre increment first value will be assigned and then operation will be performed.
    console.log(a , n);
    
    let b = "23"; // This is a string
    console.log( 10 + b); // This will print 1023 because string concatenation will occurs.
    console.log( 10 + Number(b)); // To convert string into a number to add them use (Number) keyword.

    let c = 13;
    console.log( 10 + c);
    console.log( 10 + c.toString()); // To convert number into a string.


// (3) Ternary Operators 3 operands--------

let age = 16;

let voteStatus = age>=18 ? 1 : 0 ; // Simple form of If-else and switch.

console.log(voteStatus);
