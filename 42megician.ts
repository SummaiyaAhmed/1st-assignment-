/*Great Magicians: Start with a copy of your program from Exercise 39. 
Write a function called make_great() that modifies the array of magicians 
by adding the phrase the Great to each magician’s name. 
Call show_magicians() to see that the list has actually been modified.*/



 let magicians: string[] = ["Harry Houdini", "David Blaine", "Teller"];

 make_great(magicians);
function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
}

show_magicians(magicians);
function show_magicians(magicians : string[]) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

// function ko call krwany k lea isko last me b likh skty yn  like this 
//make_great(magicians);
//show_magicians(magicians);


