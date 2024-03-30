// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message 
// that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, 
// and a shirt of any size with a different message.


// method to set default msg. set the value(parameter) in  string and then if u keep  make_shirt() argument blank it will fill it with default parameter given in string.

function make_shirt(size: string="large", message: string="I love TypeScript") {
  console.log(`The size of the shirt is ${size} and the message is ${message}`);
}
make_shirt()  //idhr kch argumnt nh dea so it will run default

//now if u want to change the size u just write size in argumnt and not mention msg .it will auto give u default msg .

make_shirt("medium") // yahan only size is given so it will give default msg.



make_shirt("small", "I love Java"); // yahan hum ny dono arguments khud set ki



