// let score = "33abc"
// let score = null
// let score = undefined
// let score = true
let score = "Vivek"

// console.log(typeof score);
// console.log(typeof (score));


let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);



// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

// let isloggedIn = 1 
// let isloggedIn = ""
let isloggedIn = "Vivek"


let BooleanIsloggedIn = Boolean(isloggedIn)
// console.log(BooleanIsloggedIn); 


// 1 => true; 0 => false 
// "" => false 
// "Vivek" => true



let someNumber = 33 


let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************************************** Operations *****************************************************


let value = 3 
let negValue = -value 
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);



let str1 = "hello"
let str2 = " Vivek"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");


// console.log( 3 + 4 * 5 % 3);    // instead of this prefer writing in the parentthesis that is ()
// console.log( (3 + 4) * 5 % 3);   


// console.log(+true);
// console.log(+"");


let num1, num2, num3 

num1 = num2 = num3 = 2+2 


let gameCounter = 100
gameCounter ++;
// console.log(gameCounter);




// This is the example of post increment i.e Postfixx

let x = 4   // This declares a variable x and initializes it with the value 3.
y = x++; // x++ is the post-increment operator //  value is assigned to y, x is incremented by 1.


// console.log(`x:${x}, y:${y}`);
//  value is assigned to y, x is incremented by 1 // y is 3 (the value assigned before the increment).




// This is the example of  Prefix increment

let a = 6  // This declares a variable a and initializes it with the value 6.
b = ++a;   // ++a is the pre-increment operator // new value of a (7) is then assigned to b.

console.log(`a:${a}, b:${b}`);
// a is now 7 (after the increment; b is also 7 (the value assigned from ++a).
