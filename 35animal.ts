//Animals: Think of at least three different animals that have a common characteristic. 
//Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
//• Modify your program to print a statement about each animal, such as A dog would make a great pet. 
//• Add a line at the end of your program stating what these animals have in common. 
//You could print a sentence such as Any of these animals would make a great pet!

/*let animals = ["dog", "cat", "bird"];
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}
console.log("Any of these animals would make a great pet!");
console.log("A dog would make a great pet.");
console.log("A cat would make a great pet.");
console.log("A bird would make a great pet.");
console.log("All of these animals would make a great pet.");*/

//another method  with for of loop
let animals1 = ["dog", "cat", "bird"];
for (let animal of animals1) {
  console.log(`A ${animal} would make a great pet.`);
}
console.log(`All of these animals would make a great pet.`);