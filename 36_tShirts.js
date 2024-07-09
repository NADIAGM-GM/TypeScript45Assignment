"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
function makeShirt() {
    var size = readlineSync.question('Enter the size of the shirt (e.g., S, M, L): ');
    var message = readlineSync.question('Enter the message to be printed on the shirt: ');
    console.log("The shirt is ".concat(size, " size and it says \"").concat(message, "\"."));
}
// Call the function
makeShirt();
