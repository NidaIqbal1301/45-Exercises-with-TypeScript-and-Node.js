// Creating a Guest List Array
let guestList = ["Reema", "Nida", "Faisal", "Talha"];

// Making veriable for those guest who can't come
let dontCome = guestList[0];

// Prient the name of guest who can't come
console.log(dontCome, "Can't come");

// Add or Remove Values form Guest List Array
guestList.splice(0, 1,"Tooba");

// Message Print for Bigger Table for Dinner
console.log("Good News! We have Found a Biggger Table for Dinner.");

// Adding a new guest at starting index of Array
guestList.unshift("Ali");

// Adding a new guest at ending index of Array
guestList.push("Zain");

// Adding a new guest at middle index of Array
let middleIndex: number = Math.floor(guestList.length / 2);

// Adding a new guest to middle index of Array
guestList.splice(middleIndex, 0, "Osama");

// Print Message of Updated List
console.log(" Updated List of our Guest");

// Sending a invitation message to our guests one by one with their names
guestList.forEach(oneguest => console.log(`As,Salam-O-Aliakum ${oneguest}, Would you like to dinner wiht me?`));

// Inform that only two guest can be invited for dinner
console.log("Unfortunately, the new dinner table won't arrive in time for the dinner, so I can invite only two people for dinner.");

// Using while-loop to remove guests from the arry until only two names remain
while(guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest} I can't invite you to dinner`);
}
// Sending a invitations to the last two guest on the list
console.log("Invitation to the last two Guests");

guestList.forEach(lasttwo => console.log(`Luckly ${lasttwo}, you are still invited to dinner`));

// Removing last two Guests form the list
guestList.pop();
guestList.pop();

// Print the Emply list
console.log("Empty List:", guestList);
