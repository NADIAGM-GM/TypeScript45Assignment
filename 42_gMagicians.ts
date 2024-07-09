function showMagicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
  }
  
  function makeGreat(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
      magicians[i] = `${magicians[i]} the Great`;
    }
  }
  
  const magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
  
  makeGreat(magicians);
  showMagicians(magicians);
  