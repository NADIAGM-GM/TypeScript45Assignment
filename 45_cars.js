// Define a function to create a car object
function createCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // Initialize the car object with the required properties
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    // Merge additional options into the car object
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var option = options_1[_a];
        Object.assign(car, option);
    }
    return car;
}
// Call the function with the required information and additional keyword arguments
var myCar = createCar('Toyota', 'Corolla', { color: 'blue', year: 2020 });
// Print the object to verify the information
console.log(myCar);
