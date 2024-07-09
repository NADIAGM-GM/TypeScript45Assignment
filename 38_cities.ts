function describeCity(city: string, country: string = "Pakistan"): void {
    console.log(`${city} is in ${country}.`);
  }
  
  // Call the function for three different cities
  describeCity("Karachi");
  describeCity("Lahore");
  describeCity("New York", "USA");
   