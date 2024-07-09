function showMagicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
function makeGreat(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "".concat(magicians[i], " the Great");
    }
}
var magicians = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
makeGreat(magicians);
showMagicians(magicians);
