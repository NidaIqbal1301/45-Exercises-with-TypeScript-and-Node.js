// Making a Function
function make_shirt (size: string = "Large", printMessage: string = "I Love TypeScript"){
    console.log(`Creating a ${size} shirt wiht the ${printMessage} print on shirt`)
}

// Calling a Function eiht by defualt values
make_shirt();

// Calling a function now with Medium size and defult message
make_shirt("Medium");

// Calling a Function now with  Small size and also Different Print Message 
make_shirt("Small", "I Love JavaScript");
