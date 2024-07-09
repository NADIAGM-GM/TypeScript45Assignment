function makeAlbum(artist, title, tracks) {
    return { artist: artist, title: title, tracks: tracks };
}
// Create three dictionaries representing different albums
var album1 = makeAlbum("Artist1", "Album1");
var album2 = makeAlbum("Artist2", "Album2", 10);
var album3 = makeAlbum("Artist3", "Album3", 15);
// Print each return value to show that objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
