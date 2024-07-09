// Tests for equality and inequality with strings
let UserName = "Alia";
let otherName = "Bilal";
console.log("Is name equal to 'Alia'? I predict True.");
console.log(UserName == 'Alia');
console.log("\nIs name not equal to 'Bilal'? I predict True.");
console.log(UserName != otherName);

// Tests using the lower case function
let word = "NADIA";
console.log("\nIs 'nadia' equal to 'Nadia' in lowercase? I predict True.");
console.log('nadia' == word.toLowerCase());

// Numerical tests
let num1 = 10;
let num2 = 5;
console.log("\nIs 10 greater than 5? I predict True.");
console.log(num1 > num2);
console.log("\nIs 10 less than or equal to 5? I predict False.");
console.log(num1 <= num2);

// Tests using "and" and "or" operators
let a = true;
let b = false;
console.log("\nIs a true and b false? I predict False.");
console.log(a && b);
console.log("\nIs a true or b false? I predict True.");
console.log(a || b);

// Test whether an item is in an array
let fruits = ["apple", "banana", "orange"];
console.log("\nIs 'apple' in the fruits array? I predict True.");
console.log(fruits.includes("apple"));

// Test whether an item is not in an array
console.log("\nIs 'pear' not in the fruits array? I predict True.");
console.log(!fruits.includes("pear"));


