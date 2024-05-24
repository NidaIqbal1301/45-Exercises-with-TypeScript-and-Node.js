// Array of Current Users
var current_users = ["Usman", "Ali", "Areeba", "Zain", "Osama"];
// Array of New_Users
var New_Users = ["Hamza", "Aysha", "Ali", "Mahad", "Areeba"];
// Loop through New_Users to check for usernames Avaibility
New_Users.forEach(function (new_one_user) {
    // Making a condition already exist and save in our_condition variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // Print Dfferent messages using if_else statements
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is available"));
    }
});
