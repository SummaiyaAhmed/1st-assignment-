//  store a location in an array.make sure array is not in alphabetic order.
let places :string[] = ['Turkey','Dubai','Kashmir','Greece','Maldives']
// print  your array in  its original order
console.log('original ' + places);
// print your array in alphabetical order w/o modifying actual list
console.log('copy ' + [...places].sort());
// show that your array is still in its original order by printing it.
console.log('original ' + places);
// print your array in reverse alphabetic order w/o changing the order of the original list.
console.log('copy ' + [...places].sort().reverse());
// show that your array is still in its original order by printing it again.
console.log('original ' + places);
// reverse the order of your list .print the array to show that its order has changed.
console.log('original ' + places.reverse());
// reverse the order of your list again. print the list to show its back to its original order.
console.log('original ' + places.reverse());
// sort your array so its stored in alphabetic order.  print your array to show that its order has changed
console.log('original ' + places.sort());
//sort to  chnge your array so its stored in  reverse alphabetic order.  print your the list to show that its order has 
console.log('original ' + places.sort().reverse());
