// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// // • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let usernamed: string[] = ["Admin", "Eric", "Ali", "Sarfraz", "Zakaria", "Zainab", "Jalal"];

if (usernamed.length > 0) {
    for (let username of usernamed) {
        if (username.toLowerCase() === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log("Hello " + username + ", thank you for logging in again");
        }
    }
} else {
    console.log("We need to find some users");
}


