function makesGreat(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        const greatMagician = `Great ${magicians[i]}`;
        greatMagicians.push(greatMagician);
    }
    return greatMagicians;
}

function displayMagicians(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

const magicianss: string[] = ["Alice", "Bob", "Charlie"];
const greatMagicians: string[] = makesGreat([...magicianss]);

console.log("Original magicians:");
displayMagicians(magicianss);

console.log("\nGreat magicians:");
displayMagicians(greatMagicians);
