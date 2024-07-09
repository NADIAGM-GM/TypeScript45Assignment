//  More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.


let guests: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Print initial list of guests
console.log("Initial list of guests:");
for (let guest of guests) {
    console.log(guest);
}

// Inform people about the bigger dinner table
console.log("Good news! We found a bigger dinner table.");

// Add new guests
guests.unshift("Zara"); // Add guest at the beginning
guests.splice(Math.ceil(guests.length / 2), 0, "Yasmine"); // Add guest in the middle
guests.push("Xander"); // Add guest at the end

// Print new list of guests
console.log("\nUpdated list of guests:");
for (let guest of guests) {
    console.log(guest);
}
