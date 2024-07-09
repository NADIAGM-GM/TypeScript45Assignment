let StartGuests: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];
let UnableToAttend: string = "Charlie"; // Guest who can't make it
let NewestGuest: string = "Frank"; // New guest to invite

// Print guest who can't make it
console.log(`Unfortunately, ${UnableToAttend} can't make it to the dinner.`);

// Replace guest who can't make it with new guest
let index1: number = StartGuests.indexOf(UnableToAttend);
if (index1 !== -1) {
    StartGuests[index1] = NewestGuest;
}

// Print new list of guests
console.log("\nUpdated list of guests:");
for (let guest of StartGuests) {
    console.log(guest);
}
