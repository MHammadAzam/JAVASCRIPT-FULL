const user ={
    name: "hammad",
    price: 1000,

    welcomeMessage: function(){
             
        console.log(`${this.name} welcome to the website `); // to access name  we need to use (this) keyword
        
    }
}
user.welcomeMessage()
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function one(){
    let username = "hammad"
    console.log(this); // (This) is not used in function only used inside the objects
    
}
// one()
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const  two = function(){
    let username = "hammad"
    console.log(this.username); // it will also  print undefined because this keyword is not used in function only used inside the objects

}
// two()

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const three = () => { // Arrow Function
    let username = "hammad"
    console.log(this.username); // STill undefined in Arrow function also
    console.log(this); // it will give output {}

}
three()
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// IMPLICIT RETURN

const four = (num1,num2) => num1 + num2
const Five = (num1,num2) => (num1 + num2) // both ways are correct to write arrow function
console.log(four(3,4))