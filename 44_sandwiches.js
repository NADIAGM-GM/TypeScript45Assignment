function orderSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Order Summary:");
    console.log("Bread: Whole Wheat");
    console.log("Items:");
    for (var i = 0; i < items.length; i++) {
        console.log("- ".concat(items[i]));
    }
    console.log("Enjoy your sandwich!\n");
}
orderSandwich("Cheese", "Tomato", "Lettuce", "Mayonnaise");
orderSandwich("Ham", "Swiss Cheese", "Mustard");
orderSandwich("Turkey", "Bacon", "Avocado");
