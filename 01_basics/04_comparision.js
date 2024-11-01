// console.log(2 > 1);
// console.log(2 >= 1); 
// console.log(2 < 1); 
// console.log(2 == 1);
// console.log(2 != 1);    // != means not equal too.


// console.log("2" > 1);
// console.log("02" > 1); 
// whenever we compare anything ensure that there datatypes are same.


// console.log(null > 0 ); 
// console.log(null == 0 ); 
// console.log(null >= 0 ); 

// The reason is that an equality check == and comparisons >< >= <= work differently.
// Comparisons convert null value to a number, treating it as 0
// That's why (3) null value >= 0 is true and (1) null value > 0 is false. 


// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);
// console.log(undefined >= 0);
// console.log(undefined <= 0);

//  we should avoid the above comparisons as they will not give the actual correct input.


// ===                               This triple "=" strictly checks the values not only values but also check data types.

console.log("2" == 2);   // if we add "==" then it is conversion 
console.log("2" === 2);   // if we add "===" then it is comparison and then tells us that the type is not same.

