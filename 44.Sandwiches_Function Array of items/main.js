//Define a function with a rest parameter that accept items arugments representing our sandwich ingredients
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items: \n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\nNow enjoy Sandwich");
}
// Call the Function 3 times with different sets of arguments
makeSandwich("bread", "lettuce", "tomato", "cheese", "mayo");
makeSandwich("bread", "lettuce", "tomato", "cheese", "mayo", "ketchup");
makeSandwich("bread", "lettuce", "tomato", "cheese", "mayo", "ketchup", "mustard");
