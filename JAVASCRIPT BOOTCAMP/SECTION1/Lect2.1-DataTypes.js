// Primitive Data Types (Call By Value)
// 7 types: String, Boolean, Number,  Null, Undefined, Big-int, Symbol(symbol is used to make a value unique)

const id = Symbol('123')
const Anotherid = Symbol('123') // BOTH ARE NOT EQUAL
console.log(id===Anotherid);

//Non-primitive DataTypes (Call by Reference)
// Array , Objects, Function

//********************************************************************************************

// Stack Memory                                                  // Heap Memory
// (1) It is used in Primitive Data Types                        (1) It is used in non-primitive datatypes
