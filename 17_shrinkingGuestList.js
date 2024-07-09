var GUESTS = ["ALIA", "FARAH", "SADIA", "SARAH","Maria","Saba"];
console.log("you can invite only two people for dinner.");
while (GUESTS.length > 2) {
    var vistors = GUESTS.shift();
    //The const keyword is used to declare guest as a constant 
    //variable, meaning its value cannot be reassigned.
    if (vistors) {
        console.log("Sorry, ", vistors, "You cant make it to dinner");
    }
}
if (GUESTS.length == 2) {
    console.log(GUESTS[0], " and", GUESTS[1], "YOU ARE STILL INVITED");
}
GUESTS.length = 0;
console.log("UPDATED GUEST LIST:", GUESTS);
// let guestList: string[] = ['Alice', 'Bob', 'Charlie', 'David', 'Eva'];
// console.log('You can invite only two people for dinner.');
// while (guestList.length > 2) {
//   const guest = guestList.shift();
//   if (guest) {
//     console.log(`Sorry ${guest}, you can't make it to dinner.`);
//   }
// }
// if (guestList.length === 2) {
//   console.log(`${guestList[0]} and ${guestList[1]}, you're still invited to dinner.`);
// }
// guestList.length = 0;
// console.log('Updated guest list:', guestList);
