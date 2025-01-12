// Primitive Data Types (Call By Value)
// 7 types: String, Boolean, Number,  Null, Undefined, Big-int, Symbol(symbol is used to make a value unique)

// N N S S B B U
// NUMBER , NULL, STRING, SYMBOL,BOOLEAN, BIGINT, UNDEFINED

const id = Symbol('123')
const Anotherid = Symbol('123') // BOTH ARE NOT EQUAL, bcz both symbols are unique on their on way.
console.log(id===Anotherid);

//Non-primitive DataTypes (Call by Reference)
// Array , Objects, Function

//********************************************************************************************

// Stack Memory                                                  // Heap Memory
// (1) It is used in Primitive Data Types                        (1) It is used in non-primitive datatypes
