interface car {
    manufacturer: string;
    model: string;
    [key: string]: string;
}

// Write a function stores Information About a car
function createCar(manufacturer: string, model: string, ...options: [string, string][]): car {
    const car: car = { manufacturer, model };

    options.forEach(([key, value]) => {
        car[key] = value;
    });

    // Return the Car Object
    return car;
}

// Call the Function with Required Information and additional Options...
const myCar = createCar("Toyota", "Camry", ["color", "blue"], ["year", "2022"]);

// Print the varible to ensure all the information is stored correctly in the car object
console.log(myCar);