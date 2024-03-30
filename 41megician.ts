//Magicians: Make a array of magician’s names.
 //Pass the array to a function called show_magicians(), 
//which prints the name of each magician in the array.

let magicians: string[] = ["Harry Houdini", "David Blaine", "Teller"];
show_magicians(magicians);
function show_magicians(magicians : string[]) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
// another method using for each loop
/*let magician: string[] = ["choo wali sarkar","bangali baba","dum wali baji"];
function show_magicians(magicians : string[]){
magicians.forEach(element => {
    console.log(element);
});
}
*/
