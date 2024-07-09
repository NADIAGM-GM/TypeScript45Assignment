const pizzas: string[] = ["Pepperoni", "Margherita", "BBQ Chicken"];

// Print pizza names
for (let pizza of pizzas) {
  console.log(pizza);
}

// Print sentences using pizza names
for (let pizza of pizzas) {
  console.log(`I like ${pizza} pizza.`);
}

// Additional sentence
console.log("I really love pizza!");
