var guests = ["Alice", "Bob", "Charlie", "David", "Eve"];
// Print initial list of guests
console.log("Initial list of guests:");
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
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
for (var _a = 0, guests_2 = guests; _a < guests_2.length; _a++) {
    var guest = guests_2[_a];
    console.log(guest);
}
