var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function makesGreat(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        var greatMagician = "Great ".concat(magicians[i]);
        greatMagicians.push(greatMagician);
    }
    return greatMagicians;
}
function displayMagicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
var magicianss = ["Alice", "Bob", "Charlie"];
var greatMagicians = makesGreat(__spreadArray([], magicianss, true));
console.log("Original magicians:");
displayMagicians(magicianss);
console.log("\nGreat magicians:");
displayMagicians(greatMagicians);
