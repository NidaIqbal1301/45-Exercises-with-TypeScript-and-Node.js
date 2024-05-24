"use strict";
// Define Variable
let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["apple", "banana", "orange"];
// Test for equality and inequality with String
console.log("\nIs apple is equal to apple?");
console.log(apple == "apple"); // true
console.log("\nis apple is not equal to apple?");
console.log(apple != "apple"); // false
// Test using the lower case function
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\nIs APPLE is not equal  to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");
// Numberical Tests:
// Equal to ==
console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty); // false
// Not Equal to !=
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty); // true
// Greater Than -- >
console.log("\nIs ten is greater than zero?");
console.log(ten > 0); // true
// Less Than -- <
console.log("\nIs twenty is less than 10");
console.log(twenty < ten); // false
// Greater than or Equal to
console.log("\n Is ten is greater than or equal to 5?");
console.log(ten >= 5); // true
// Less than or Equal to
console.log("\n Is twenty is less than or equal to 10?");
console.log(twenty <= 10); // false
// Tests using "and" & "or" Operaters
// Using "and" &&
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);
// Using "or" ||
console.log("\n twenty is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n twenty is greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);
// Test weather an item include in Array
console.log("\n is orange include in my array");
console.log(fruits.includes("orange"));
console.log("\n orange is not include in my fruits array");
console.log(!fruits.includes("orange"));
