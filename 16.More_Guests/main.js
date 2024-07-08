// Creating a Guest List Array
var guestList = ["Reema", "Nida", "Faisal", "Talha"];
// Making veriable for those guest who can't come
var dontCome = guestList[0];
// Prient the name of guest who can't come
console.log(dontCome, "Can't come");
// Add or Remove Values form Guest List Array
guestList.splice(0, 1, "Tooba");
// Message Print for Bigger Table for Dinner
console.log("Good News! We have Found a Biggger Table for Dinner.");
// Adding a new guest at starting index of Array
guestList.unshift("Ali");
// Adding a new guest at ending index of Array
guestList.push("Zain");
// Adding a new guest at middle index of Array
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index of Array
guestList.splice(middleIndex, 0, "Osama");
// Print Message of Updated List
console.log(" Updated List of our Guest");
// Sending a invitation message to our guests one by one with their names
guestList.forEach(function (oneguest) { return console.log("As,Salam-O-Aliakum ".concat(oneguest, ", Would you like to dinner wiht me?")); });
