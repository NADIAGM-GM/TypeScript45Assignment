// Define array of places to visit
let placesToVisit: string[] = ["Gilgit", "Lahore", "Hunza", "New Dehli", "Taj Mahal"];

// Print original array
console.log("Original order:");
console.log(placesToVisit);

// Print array in alphabetical order without modifying the original list
console.log("\nAlphabetical order:");
console.log([...placesToVisit].sort());

// Print original array to show it's still in its original order
console.log("\nOriginal order:");
console.log(placesToVisit);

// Print array in reverse alphabetical order without modifying the original list
console.log("\nReverse alphabetical order:");
console.log([...placesToVisit].sort().reverse());

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
