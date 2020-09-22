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
let countSheep = (herd) => {
  if (herd === 0) {
    return console.log("All sheep jumped over the fence");
  }
  console.log(herd, "Another sheep jumps over the fence");
  countSheep(herd - 1);
};

countSheep(12);

/*Write a function called powerCalculator() that takes two parameters, 
an integer as a base, and another integer as an exponent. The function returns the value of the base 
raised to the power of the exponent. 
Use only exponents greater than or equal to 0 (positive numbers)

powerCalculator(10,2) should return 100
powerCalculator(10,-2) should return exponent should be >= 0 */

let powerCalculator = (baseInt, expInt) => {
  if (expInt < 0) {
    return console.log("exponent should be >= 0");
  }
  if (expInt == 0) {
    return 1;
  }

  return baseInt * powerCalculator(baseInt, expInt - 1);

  console.log(raisedNumber);
};
powerCalculator(7, 4);
console.log(powerCalculator(7, 4));

/* Write a function that reverses a string. Take a string as input, 
reverse the string, and return the new string.*/

let stringReverse = (str) => {
  if (str.length == 0) {
    return str;
  }
  return stringReverse(str.slice(1)) + str[0];
};

console.log(stringReverse("carol"));
/*4. nth Triangular Number
Calculate the nth triangular number. 
A triangular number counts the objects that can form an equilateral triangle. 
The nth triangular number is the number of dots composing a triangle with n dots on a side,
 and is equal to the sum of the n natural numbers from 1 to n. 
This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.*/

/*String Splitter
Write a recursive function that splits a string based on a separator 
(similar to String.prototype.split). Don't use JS array's split function to solve this problem.

Input: 02/20/2020
Output: ["02", "20", "2020"]*/

let stringSplitter = (str1, separator = "/") => {
  let index = str1.indexOf(separator);
  if (index == -1) {
    return [str1];
  }
  let front = str1.slice(0, index);
  let rest = str1.slice(index + 1);
  return [front].concat(stringSplitter(rest, separator));
};
console.log(stringSplitter("02 / 20 / 2020"));


/*Write a recursive function that prints the Fibonacci sequence of a given number. 
The Fibonacci sequence is a series of numbers in which each number is the sum of 
the 2 preceding numbers. For example, the 7th Fibonacci number in a 
Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.*/

let fiboFinder = (num) => {
  let sequence = [];
  if (sequence[-1] == num){
    return sequence;
  }
  /*
function fib(n) { console.log(n);

if (n === 0) return 0; if (n === 1) return 1;

return fib(n - 1) + fib(n - 2); }*/

  sequence[...fiboFinder(num-1)]
}

/*find your way out of the maze*/
