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
// Call make_great function t modify magicians names
var great_magicians = make_great(magician_names);
// Call show_magicians that show midified list of magicians
show_magicians(great_magicians);
