// Array of Current Users
let current_users = ["Usman","Ali", "Areeba", "Zain", "Osama"]

// Array of New_Users
let New_Users = ["Hamza","Aysha", "Ali", "Mahad", "Areeba"]

// Loop through New_Users to check for usernames Avaibility
New_Users.forEach(new_one_user => {

    // Making a condition already exist and save in our_condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    
    // Print Dfferent messages using if_else statements
    if (our_condition){
        console.log(`sorry ${new_one_user} is already taken!`)
    }else{
        console.log(`This Username ${new_one_user} is available`)  
    }
})