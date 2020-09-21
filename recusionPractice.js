/*Write a recursive function that counts how many sheep jump over the fence. 
Your program should take a number as input. 
That number should be the number of sheep you have. 
The function should display the number along with the message 
"Another sheep jumps over the fence" until no more sheep are left.

Input: 3
Output:
3: Another sheep jumps over the fence
2: Another sheep jumps over the fence
1: Another sheep jumps over the fence
All sheep jumped over the fence*/
function countSheep(herd) {
  if (herd === 0) {
    return console.log("All sheep jumped over the fence");
  }
  console.log(herd, "Another sheep jumps over the fence");
  countSheep(herd - 1);
}

countSheep(12);

/*Write a function called powerCalculator() that takes two parameters, 
an integer as a base, and another integer as an exponent. The function returns the value of the base 
raised to the power of the exponent. 
Use only exponents greater than or equal to 0 (positive numbers)

powerCalculator(10,2) should return 100
powerCalculator(10,-2) should return exponent should be >= 0 */

function powerCalculator(baseInt, expInt) {
  raisedNumber = 1;
  if (expInt <= 0) {
    return console.log("exponent should be >= 0");
  }

  raisedNumber = raisedNumber * baseInt;
  powerCalculator(baseInt, expInt - 1);
  return raisedNumber;
  console.log(raisedNumber);
}
powerCalculator(7, 4);
