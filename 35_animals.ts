const animals: string[] = ["Dog", "Cat", "Rabbit"];

// Print animal names
for (let animal of animals) {
  console.log(animal);
}

// Print statements about each animal
for (let animal of animals) {
  console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

// Print common characteristic
console.log("Any of these animals would make a great pet!");
