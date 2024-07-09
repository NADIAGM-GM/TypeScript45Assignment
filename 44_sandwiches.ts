function orderSandwich(...items: string[]): void {
    console.log("Order Summary:");
    console.log("Bread: Whole Wheat");
    console.log("Items:");
    for (let i = 0; i < items.length; i++) {
        console.log(`- ${items[i]}`);
    }
    console.log("Enjoy your sandwich!\n");
}

orderSandwich("Cheese", "Tomato", "Lettuce", "Mayonnaise");
orderSandwich("Ham", "Swiss Cheese", "Mustard");
orderSandwich("Turkey", "Bacon", "Avocado");
