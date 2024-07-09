"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeShirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The shirt is ".concat(size, " size and it says \"").concat(message, "\"."));
}
// Create a large shirt with the default message
makeShirt();
// Create a medium shirt with the default message
makeShirt("Medium");
// Create a shirt of any size with a different message
makeShirt("Small", "Hello, World!");
var readlineSync = require("readline-sync");
function makeShirts() {
    var size = readlineSync.question('Enter the size of the shirt (e.g., S, M, L): ') || "Large";
    var message = readlineSync.question('Enter the message to be printed on the shirt: ') || "I love TypeScript";
    console.log("The shirt is ".concat(size, " size and it says \"").concat(message, "\"."));
}
// Call the function
makeShirts();
