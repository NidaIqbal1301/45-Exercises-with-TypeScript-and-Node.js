// Using the GuestList of Exercise # 14
let guestList = ["Reema", "Faisal", "Talha"];

// The Guest not Come
let dontCome = guestList[0];

// Print the Message
console.log(dontCome, "Can't come");

// Remove and Add Guest in List
guestList.splice(0, 1, "Tooba");

// Print teh Invitation Message for New Guest
guestList.forEach(guest => console.log(`As,Salam-O-Aliakum ${guest}, would you like to dinner with me?`));