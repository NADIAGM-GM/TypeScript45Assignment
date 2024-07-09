function makeShirt(size: string = "Large", message: string = "I am happy"): void {
  console.log(`The shirt is ${size} size and it says "${message}".`);
}

// Create a large shirt with the default message
makeShirt();

// Create a medium shirt with the default message
makeShirt("Medium");

// Create a shirt of any size with a different message
makeShirt("Small", "Hello, World!");

import * as readlineSync from 'readline-sync';

function makeShirts(): void {
  const size: string = readlineSync.question('Enter the size of the shirt (e.g., S, M, L): ') || "Large";
  const message: string = readlineSync.question('Enter the message to be printed on the shirt: ') || "I love TypeScript";

  console.log(`The shirt is ${size} size and it says "${message}".`);
}

// Call the function
makeShirts();
