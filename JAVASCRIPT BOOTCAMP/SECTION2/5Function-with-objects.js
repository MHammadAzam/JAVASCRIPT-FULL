
function calculateCartPrice(...num1) // ...num1 is a Rest operator here , now we can score as many values as we want in num1
{
            return num1
}
console.log(calculateCartPrice(200 , 400, 500)); // e.g i have 3 multiple values so to print all use Rest operator (...)

//******************************Function with objects*************************************************************** */
 const User ={
    name : "Hammad",
    age : 20
 }
 function UserData(anyObject){
        console.log(`My name is ${anyObject.name} amd my age is ${anyObject.age}`);
 }
 UserData(User); // here we are passing an object to the function UserData() and it will print the values
 // ALSO WE CAN PASS VALUES WITH THE ARGUMENTS E.G
 UserData({name : "Hammad" , age : 20}); 

 //********************************FUNCTION WITH ARRAY**************************************************************** */
 const myNewArray = [200, 400, 600, 800]

 function returnSecondValue(getArray){
         return getArray
 }
 console.log(returnSecondValue(myNewArray)); // here we are passing an array to the function return