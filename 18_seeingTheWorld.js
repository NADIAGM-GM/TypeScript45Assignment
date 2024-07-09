var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Define array of places to visit
var placesToVisit = ["Gilgit", "Lahore", "Hunza", "New Dehli", "Taj Mahal"];
// Print original array
console.log("Original order:");
console.log(placesToVisit);
// Print array in alphabetical order without modifying the original list
console.log("\nAlphabetical order:");
console.log(__spreadArray([], placesToVisit, true).sort());
// Print original array to show it's still in its original order
console.log("\nOriginal order:");
console.log(placesToVisit);
// Print array in reverse alphabetical order without modifying the original list
console.log("\nReverse alphabetical order:");
console.log(__spreadArray([], placesToVisit, true).sort().reverse());
// Print original array to show it's still in its original order
console.log("\nOriginal order:");
console.log(placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
console.log("\nReversed order:");
console.log(placesToVisit);
// Reverse the order of the list again to bring it back to its original order
placesToVisit.reverse();
console.log("\nOriginal order:");
console.log(placesToVisit);
// Sort the array in alphabetical order
console.log("\nSorted in alphabetical order:");
console.log(placesToVisit.sort());
// Sort the array in reverse alphabetical order
console.log("\nSorted in reverse alphabetical order:");
console.log(placesToVisit.sort().reverse());
