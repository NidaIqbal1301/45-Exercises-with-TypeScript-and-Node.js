var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making an array of Countries and Print its Orginal Order
var countriesToVisit = ["China", "Denmark", "Brazil", "Argentina"];
console.log("Orginal Order:", countriesToVisit);
// Sorting the Array in Alphabetical order
console.log("Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort());
// Show that Array is still in its Orginal Order
console.log("Still in Orginal Order:", countriesToVisit);
// Print Array in revese  Order using reverse() method
console.log("Reverse Order: ", __spreadArray([], countriesToVisit, true).reverse());
// Show that Array is still in its Orginal Order
console.log("Still in Orginal Order:", countriesToVisit);
// We have Change the original Array 
console.log("Orginal Arry Reverse:", countriesToVisit.reverse());
// Print the array to show that its back to orginal order
console.log("Back to Orginal Order:", countriesToVisit.reverse());
// Sorting the Array so its stored in Alphabetical order
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());
// Sorting the Array so its stored in reverse alphabetical  order Again
console.log("Orginal Array Reverse Again:", countriesToVisit.reverse());
