// Making a Function
function make_shirt(size, , printMessage) {
    if (printMessage === void 0) { printMessage = "I Love TypeScript"; }
    console.log("Creating a ".concat(size, " shirt wiht the ").concat(printMessage, " print on shirt"));
}
// Calling a Function eiht by defualt values
make_shirt();
// Calling a function now with Medium sozw and defult message
make_shirt("Medium");
// Calling a Function now with  Small size and also Different Print Message 
make_shirt("Small", "I Love JavaScript");
