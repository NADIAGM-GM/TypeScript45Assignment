//usinf if else chain
var alienColor = 'green';
if (alienColor === 'green') {
    console.log('You earned 5 points!');
}
else if (alienColor === 'yellow') {
    console.log('You earned 10 points!');
}
else if (alienColor === 'red') {
    console.log('You earned 15 points!');
}
else {
    console.log('Invalid alien color.');
    console.log("\n");
}
//using switch statement
var alien_clr = "red";
switch (alien_clr) {
    case 'green':
        console.log('You earned 5 points!');
        break;
    case 'yellow':
        console.log('You earned 10 points!');
        break;
    case 'red':
        console.log('You earned 15 points!');
        break;
    default:
        console.log('Invalid alien color.');
        console.log("\n");
}
//using object literals
var alien_color = "green";
var colorpicker = {
    green: 10,
    yellow: 10,
    red: 15
};
if (colorpicker[alien_color]) {
    console.log("You earned" + colorpicker[alien_color], " points!");
}
else {
    console.log('Invalid alien color.');
    console.log("\n");
}
//27_alienColor3.ts
