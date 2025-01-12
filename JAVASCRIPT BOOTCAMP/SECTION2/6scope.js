//**********************************INTERVIEW QUESTION************************************************************************ */
// SCOPE IN node AND windows
// Global scope is differenet when you check in browser and different in node.
// Global Object in Browser is window.
// when we run console.log(this) outside function in terminal it shows {}, but when we run it in browser it shows Windows


// This is problem in var e.g 2-3 programmers are working on same project and u have declared value var c=300 , but another person has used var c=2, so on termianl u will get value recenetly used i.e 2 which will completely confuse you..

var c = 300 // Global Scope
let a = 200 // now same if a both persons used same variable of let type inside and outside the brackets , u will get output 200 for this one , and if you console.log(a) inside the function you will get the output 1.
if (true){
    let a=1
    const b=3 // LOcal scope
    var c=2
    console.log(a);
    
}

{
    // These curly Braces is a Scope
}

// console.log(a); Let is not accesible outside the brackets
// console.log(b); const is also not accesible outside the brackets
console.log(c);  

//****************************************NESTED SCOPES*************************************************************/
// FUNCTION WITHIN FUNCTION
// so  if you have a function inside another function, then the inner function will have access to the outer function, but the outer function wont  have access to the inner function.

    function one(){
        const username ="hammad"

        function two(){
            const password = "123"
            console.log(username);
            
        }
        // console.log(password);
        two()
        
    }
    one()

//************************************* INTERESTING ******************************************************************/

console.log(addone(5)); // also can executed before function
function addone(value){
    return value + 1
}
// addone(5) ....written like this



const addtwo = function(num){
    return num + 2
}
console.log(addtwo(5)); // as it is stored in avariable so it can't be executed before function.