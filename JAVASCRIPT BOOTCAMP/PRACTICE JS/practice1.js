// 1) Add something to string use concatenation
let str = "10"
console.log(str + 10)

// 2) find datatype of string in Q1
console.log(typeof str)

// 3) change anything of object outside the object
const obj = {
    name: "John",
    age: 30,
    students: 20
}
Object.freeze(obj);
obj.name = "hammad"
// console.log(obj.name);

// 4) add another element inside the object.
const obj1 = {  // obj1 is refernce to the given object you cant add another obj with it, you can add another property to it.
    name: "John",
    age: 30,
    students: 20
}
// obj1 = {}   THESE BOTH ARE NOT POSSIBLE BECAUSE obj1 IS ALREADY REFERENCING TO THE ABOVE OBJECT AND IS CONSTANT.
// obj = 45 
obj1['teacher'] = "Lily"
// console.log(obj1);

// 5) create a word meaning dictionary and access it.
const dict = {
    apple: "fruit",
    car: "vehicle",
    tree: "plant"

}
// console.log(dict.tree);




   
