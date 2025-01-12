
// Execution Context
// The execution context is the environment in which a function is executed. It includes the function's local variables, arguments, and the global object.

// 1) Global Execution Context: This is the top-most execution context in the call stack. It is the global object (window or global) and is created when the script starts executing. (and is allocated inside (THIS) keyword)

// 2) Function Execution Context: This is created when a function is called. It includes the function's local variables, arguments, and the global object.
//****************************************************************************************************************************** */
let val1 = 10
let val2 = 15
function addnum(num1,num2){
    const total = num1 + num2
    return total
}
let result1 = addnum(val1,val2)
let result2 = addnum(5,10)

// 1) Global Execution Phase
// Fistly code is allocated inside (this) keyword.  

// 2) Memory Allocation phase
// val1 = undefined
// val2 = undefined
// addnum = Definition
// result1 = undefined
// result2 = undefined

// 3) Execution Phase
// val1 = 10
// val2 = 15
// addnum = here a new Global Execution Context is created which contains (new variable enviornment + Execution Thread) 
// result1 = 25 // after this again new execution conetxt is created for result2 and same two processes below are repetaed just values are changed.
// result2 = 15

        //  now again the above two steps will be repeated 

        // 1) Memory Allocation phase:
        // num1 = undefined
        // num2 = undefined
        // total = undefined

        // 2) Execution Phase
        // num1 = 10
        // num2 = 15
        // total = 25 :::::::: This total is returned to the global execution context and is assigned to result1 and result2.

// AFTER THIS WHOLE PROCESS IS OVER THE GLOBAL EXECUTION CONTEXT IS DESTROYED AND THE MEMORY IS DEALLOCATED. AND value result1 if.e 25 is assigned at the execction phase


//******************************************************************************************************************************* */
                                // INTERVIEW QUESTION
                                
// CALL STACK
// 1) Global Execution Context: This is the top-most execution context in the call stack.

// LIFO (Last In First Out) - The last function that was called is the first one to be executed
// e.g you have 3 functions( one(), two(), three()) and you placed func one() in a stack but you called func two() and then func three() then the [ order of execution will be func three() then func two() and then func one() and then the stack will be empty.]