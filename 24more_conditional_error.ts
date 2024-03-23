/*  24.More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want 
to try more comparisons, write more tests. Have at least one True and one False result for each of the
//  following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
// and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/

console.log("");

let str1 = "Dentist";
let str2 = "dentist";
let str3 = "DENTIST";

console.log("Test 1: Equality and inequality with strings");
console.log(str1 == str2);
console.log(str1 != str2);
console.log(str1 == str3);
console.log(str1 != str3);

console.log("Test 2: Lower case function");
console.log(str1.toLowerCase() == str2.toLowerCase());
console.log(str1.toLowerCase() == str3.toLowerCase());

console.log("Test 3(A): Numerical tests involving equality and inequality, ");
let num1 = 10;
let num2 = 20;
let num3 = 30;
console.log(num1 == num2);
console.log(num1 != num2);

// Numerical tests involving greater than and less than,
console.log("Test 3(B): Numerical tests involving greater than and less than, "); 
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 > num3);
console.log(num1 < num3);







//Numerical tests involving >= greater than or equal to, and  <= less than or equal to.
console.log("Test 3(C): Numerical tests involving greater than or equal to, and  less than or equal to, ");
console.log(num1 >= num2);
console.log(num1 <= num2);
console.log(num1 >= num3);





//Tests using "and" and "or" operators
console.log("Test 4: Tests using \"and\" and \"or\" operators");
console.log(num1 > num2 && num1 < num3);  // && mai jb tk sari condition true nh hongi wo false hi show krega
console.log(num1 > num2 || num1 < num3); // || mai jb tk ek condition true hongi wo true show krega.

// Test whether an item is in a array
console.log("Test 5: Test whether an item is in a array");
let arr1 = [10, 20, 30];
console.log(arr1.includes(10));
console.log(arr1.includes(20));


//Test whether an item is not in a array
console.log("Test 6: Test whether an item is not in a array");
console.log(arr1.includes(50));
console.log(arr1.includes(40));
console.log(arr1.includes(60));
console.log(arr1.includes(80));

// ANOTHER Test whether an item is in a array
console.log("Test 5(A): Test whether an item is in a array");
let members = ['kashmala', 'ahmed', 'pareesha'];
console.log(members.includes('kashmala'));
console.log(members.includes('pareesha'));

//Test whether an item is not in a array
console.log("Test 6(b): Test whether an item is not in a array");
console.log(members.includes('summaiya'));// it will give false result.
console.log(!members.includes('summaiya')); //it will give true result  ! means NO