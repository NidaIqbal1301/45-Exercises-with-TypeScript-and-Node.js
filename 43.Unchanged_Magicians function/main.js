// Define a function to print each magician name from a array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Function to make magicians great through .map() it will nodigy array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an array containing magicians name
var magician_names = ["Harry Poter", "Hamza", "Usman"];
// Making a Copy of Original array through .Slice() function
var copy_magician_names = magician_names.slice();
// Modify the copied array to include  'The Great' in front of every name
var copy_great_magician = make_great(copy_magician_names);
// Showing original and modified arrays using functions defined above
// Original
console.log("Original Array\n");
show_magicians(magician_names);
// Copy
console.log("\nCopied Array\n");
show_magicians(copy_great_magician);
