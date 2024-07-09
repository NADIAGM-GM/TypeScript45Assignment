import * as readlineSync from 'readline-sync';

function makeShirt(): void {
  const size: string = readlineSync.question('Enter the size of the shirt (e.g., S, M, L): ');
  const message: string = readlineSync.question('Enter the message to be printed on the shirt: ');

  console.log(`The shirt is ${size} size and it says "${message}".`);
}

// Call the function
makeShirt();
