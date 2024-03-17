export{};
// use of export {}  so that The local variable name no longer clashes with the global typings, so the error is resolved.
let names :string[] = ['Summaiya','Muddesir','Kashmala','Pareesha'] ;
// for loop{javascript , python thing}

const message :string = 'hey!Thank you for your support: '

for(let i=0; i<names.length; i++){
// ab hum code lga rae hyn 
// output dene k lea console krty hyn
console.log(message + names[i]);

 }
