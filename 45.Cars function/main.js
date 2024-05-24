// Write a function stores Information About a car
function createCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        car[key] = value;
    });
    // Return the Car Object
    return car;
}
// Call the Function with Required Information and additional Options...
var myCar = createCar("Toyota", "Camry", ["color", "blue"], ["year", "2022"]);
// Print the varible to ensure all the information is stored correctly in the car object
console.log(myCar);
