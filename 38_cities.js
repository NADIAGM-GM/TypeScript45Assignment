function describeCity(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Call the function for three different cities
describeCity("Karachi");
describeCity("Lahore");
describeCity("New York", "USA");
