//  Data types are divided in two types : Primitive Data Type and Non-Primitive Datatype

//  Primitive 

// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

// 1.Number: Represents both integer and floating-point numbers. Example: 5, 3.14.
const score = 100
const scoreValue = 100.93 

// 2.String: Represents a sequence of characters enclosed in single or double quotes. Example: "Hello, world!".
const name = "Vivek"

// 3,Boolean: Represents a binary value, either true or false, often used for conditional logic.
const isLoggedIn = true;

// 4.Undefined: Represents a variable that has been declared but hasn't been assigned a value yet. Example: let x;.
let emailId;

// 5.Null:  standalone value it is represenataion of empty value it is special type and it is a object type. Example: let y = null; 
const outsideTemp = null;


// 6.Symbol (ES6): it is mostly used used to find uniqnece.
const Id = Symbol("123")
const anotherId = Symbol("123")
// Even after adding the same symbol on both the ID's but the values of both the ID will be different.
console.log(Id === anotherId);


// 7.BigInt (ES11): Represents large integers that cannot be represented by the Number type.
const bigNumber = 66378237346842736872n       // just we have to put "n" now it is big int 

// * Premitive Datatypes

//                   Type                                   typeof

// i)             Number                                    number
// ii)            String                                    string
// iii)           Boolean                                   boolean
// iv)            Bigint                                    bigint
// v)             Symbol                                    symbol
// vi)            Null                                      object
// vii)           Undefined                                undefined

// JavaScript is a dynamically typed language. 
// Because data type will automatically assigned at the time of compilation or code execution.








// Reference (Non-Primitive)

// Array, Objects, Functions 

// 1.Array: Represents a list-like collection of values, indexed by numbers (integer indices). Example: [1, 2, 3, 4].
const heros = ["shaktiman", "nagraj", "spiderman"]       // the values present in the square brackets are Array. 

// 2.Object: Represents a collection of key-value pairs (properties and methods). Example: { name: "John", age: 30 }.
let myObject = {                                       // here we have also given the variable to our object.
    name: "Vivek",
    age: 21,                                      // the data types in the objects can be anything it can be a string, number, etc.
}                                                        // the values present in the curly brackets are objects .


// 3.Function: Represents a reusable block of code that can be invoked or called with arguments. Example: function add(x, y) { return x + y; }.
// function(){}                                            //.... This is the formula for fumnction
// const myFunction = function(){
//     console.log("Hello World!");                         //... This is the decalaration of the function. 
// }                                                       //.... Here we can also declare a varaible to our function.

// 4.Date: Represents dates and times.


// 5.RegExp: Represents regular expressions for pattern matching.





console.log(typeof bigNumber);


// * Non-Premitive OR Referance OR Object datatype

//                   Type                                   typeof

// i)               Object                                 object
// ii)              Array                                  object
// iii)             Function                            function(object)