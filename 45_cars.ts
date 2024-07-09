// Define a function to create a car object
function createCar(manufacturer: string, model: string, ...options: { [key: string]: any }[]): { [key: string]: any } {
    // Initialize the car object with the required properties
    const car = {
        manufacturer,
        model,
    };

    // Merge additional options into the car object
    for (const option of options) {
        Object.assign(car, option);
    }

    return car;
}

// Call the function with the required information and additional keyword arguments
const myCar = createCar('Toyota', 'Corolla', { color: 'blue', year: 2020 });

// Print the object to verify the information
console.log(myCar);
