let guest_list : string[] = ['sania mirza','sana javed','shoaib malik'];
for(let i =0; i<guest_list.length; i++){
console.log('Dear ' + guest_list[i] + ',\n\n I cardially invite you to the party.\n\n Thank You! ')
}
let  unappeared_Guest :string ='shoaib malik';
let  updated_Guest :string ='Umair Jaswal';
// 0 index mean 1st one in the list that is sania  but if u want to replace shoaib then write its index nmbr that is 2

guest_list[2] = updated_Guest;
for(let i=0; i<guest_list.length; i++){
    console.log('Dear ' + guest_list[i] + ',\n\n I cardially invite you to the party.\n\n Thank You!\n\n ');
}
console.log(`Mr. ${unappeared_Guest} is not coming to the party.`);

