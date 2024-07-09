type Album = {
    artist: string;
    title: string;
    tracks?: number;
  };
  
  function make_Album(artist: string, title: string, tracks?: number): Album {
    return { artist, title, tracks };
  }
  
  // Create three dictionaries representing different albums
  const albums1 = makeAlbum("Babar Khuwaja", "The Great Khawaja");
  const albums2 = makeAlbum("Amir", "Aamir the Majician", 10);
  const albums3 = makeAlbum("Penn Jillette", "Penn & Teller", 15);
  
  // Print each return value to show that objects are storing the album information correctly
  console.log(albums1);
  console.log(albums2);
  console.log(albums3);
  