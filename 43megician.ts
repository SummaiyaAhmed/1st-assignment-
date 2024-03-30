/*Unchanged Magicians: Start with your work from Exercise 40. 
Call the function make_great() with a copy of the array of magicians’ names.
 Because the original array will be unchanged, return the new array and store it in a separate array. 
 Call show_magicians() with each array to show that you have one array of the original names 
and one array with the Great added to each magician’s name.*/


 let magicians: string[] = ["Harry Houdini", "David Blaine", "Teller"];

 const copyMagicianArray = copyArray(magicians) // COPY ARRAY WALA FUNCTION EK ARRAY RETRN KRYGA  
 // USKO HMAIN EK VARIABLE(copyMagicianArray) ME CATCH KRNA PREGA US RETRN ARRAY KO .
 function copyArray(arr: string[]) {
return[...arr]  
}




 make_great(copyMagicianArray);
function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        copyMagicianArray[i] = "The Great " + copyMagicianArray[i];
    }
}
console.log("this is my original array: ");
show_magicians(magicians);
function show_magicians(magicians : string[]) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

 console.log("this is my modified copy of array: ");
 show_magicians(copyMagicianArray);


// function ko call krwany ya execute krany k lea isko last me b likh skty yn  like this 
//make_great(magicians);
//show_magicians(magicians);


