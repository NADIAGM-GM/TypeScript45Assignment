var StartGuests = ["Alice", "Bob", "Charlie", "David", "Eve"];
var UnableToAttend = "Charlie"; // Guest who can't make it
var NewestGuest = "Frank"; // New guest to invite
// Print guest who can't make it
console.log("Unfortunately, ".concat(unableToAttend, " can't make it to the dinner."));
// Replace guest who can't make it with new guest
var index1 = StartGuests.indexOf(UnableToAttend);
if (index !== -1) {
    StartGuests[index] = NewestGuest;
}
// Print new list of guests
console.log("\nUpdated list of guests:");
for (var _i = 0, StartGuests_1 = StartGuests; _i < StartGuests_1.length; _i++) {
    var guest = StartGuests_1[_i];
    console.log(guest);
}
