// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.




// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// • Make a list of five or more usernames called current_users.


let current_users: string[] = ['nadeem', 'moBin', 'kaleEm', 'aLeem', 'john'];
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_users: string[] = ['zareen', 'NADEEM', 'shagufta', 'rasheed', 'JOHN'];
new_users.forEach(n_user => {
    let lowerCase: string = n_user.toLowerCase();
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. 
if (current_users.map(c_user => c_user.toLowerCase()).includes(lowerCase)) {        
console.log(`The username ${n_user} is already taken, please enter a new username.`);
    
    // If a username has not been used, print a message saying that the username is available.
}
    else {
        console.log(`The username ${n_user} is available.`);
    }
})


//another method to perform this excercise.

// for (let i = 0; i < new_users.length; i++) {
//     if (current_users.includes(new_users[i])) {
//         console.log(`The username ${new_users[i]} is already taken, please enter a new username.`);
//     } else {
//         console.log(`The username ${new_users[i]} is available.`);
//     }
// }