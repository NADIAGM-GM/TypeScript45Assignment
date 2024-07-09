function cityCountry(city: string, country: string): string {
    return `${city}, ${country}`;
  }
  
  // Call the function with three city-country pairs
  const city1 = cityCountry("Lahore", "Pakistan");
  const city2 = cityCountry("Paris", "France");
  const city3 = cityCountry("New York", "USA");
  const city4 = cityCountry("Delhi", "India");
  
  console.log(city1);
  console.log(city2);
  console.log(city3);
  console.log(city4);
  