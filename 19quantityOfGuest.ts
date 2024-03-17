let guest_list: string[] = ['sania mirza', 'sana javed', 'shoaib malik'];
// exercise 14 inviting guest (dont print this part in ex16 thats y we comment it)
// for(let i =0; i<guest_list.length; i++)
// {
//console.log('Dear ' + guest_list[i] + ',\n\n I cardially invite you to the party.\n\n Thank You! ')}

// ex 15 changing guest list
let unappeared_Guest: string = 'shoaib malik';
let updated_Guest: string = 'Umair Jaswal';
// 0 index mean 1st one in the list that is sania  but if u want to replace shoaib then write its index nmbr that is 2

guest_list[2] = updated_Guest;
// IN EX 17  comment this for loop of ex 15
//for(let i=0; i<guest_list.length; i++){
//  console.log('Dear ' + guest_list[i] + ',\n\n I cardially invite you to the party.\n\n Thank You!\n\n ');
//}
//console.log(`Mr. ${unappeared_Guest} is not coming to the party.`);
// ex 16 adding  new guests
//console.log('Great news! we have increased our capacity so now 3 more guests are joining us. ');
// we use unshift  for array
// we use () to  write a function/method
// function of arrays are unshift splice n push
//0 index se before add new guest . means summaiya will be ahead of sania mirza n now summaiya will become 0 index and sania will become 1st index..and sana will me 2nd index.
// i hv added 3 new guests
guest_list.unshift('Summaiya');
//  we wrote 2 because 2nd index p new guest add krna hy 
// then , we wrote 0 tht means that we dont want to dlt any guest 
// then we adding new guest name
guest_list.splice(2, 0, 'Muddesir');
// add guest in last
guest_list.push('Kashmala');
// here i hv print array of guest
//for (let i = 0; i < guest_list.length; i++) {
    // console.log('Dear ' + guest_list[i] + ',\n\n I cardially invite you to the party.\n\n Thank You!\n\n ');
//}
// apology msg to uninvited guest
//console.log('\nSorry we can not arrange big table, only 2 people will be invited.');
// i have removed guest here
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    // console.log(`sorry Dear ${remove_guest},I deeply apologize for not being able to invite you this time.`);


}
//the only two left invited guest.
// for (let i = 0; i < guest_list.length; i++) {
//     console.log('Dear ' + guest_list[i] + ',\n\n You are still invited.\n\n Thank You!\n\n ');
// }
// i hve removed  all guest from array
guest_list.splice(0, 2);
console.log(guest_list);


// EXCERCISE # 19.


// print a msg  indicating the ' number of guest ' u r inviting.
 console.log(`Total number of guests are ${guest_list.length}`);

