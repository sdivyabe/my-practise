// // Find Addition Subtraction Divition and Multiplication
// //=======================================================

// let a, b;
// a = 4;
// b = 5;
// let sum = a + b;
// let sub = b - a;
// let mul = b * a;
// let div = b / a;
// console.log("Sum of 2 Numbers = ", sum);
// console.log("Subtraction of 2 Numbers = ", sub);
// console.log("Multiplication of 2 Numbers = ", mul);
// console.log("Divition of 2 Numbers = ", div);

// //==========================================================================
// //Program to calculate Area of Circle
// //====================================

// let area, radius;
// radius = 5;
// area = 3.14 * radius * radius;
// console.log("Area of Circle = ", area);

// //==========================================================================
// //Program to calculate Area of  Triangle
// //=======================================

// let triangle, h, base;
// h = 6;
// base = 4;
// triangle = (h * base) / 2;
// console.log("Area of  Triangle = ", triangle);

// //===============================================================================
// //Program for Calculating Simple Interest
// //=======================================

// let SI, p, n, r;
// p = 1000;
// n = 2;
// r = 2;
// SI = (p * n * r) / 100;
// console.log("Simple Interest = ", SI);

// //================================================================================
// //Program for calculating Square and Cube of the given Number
// //============================================================

// let num, square, cube;
// num = 7;
// square = num ** 2;
// cube = num ** 3;
// console.log("Square = ", square);
// console.log("Cube = ", cube);

// //=====================================================================================
// //Program to SWAP two numbers
// //===========================

// let temp;
// a = 12;
// b = 45;
// console.log("Before Swapping = ", a, b);
// temp = a;
// a = b;
// b = temp;
// console.log("After Swapping = ", a, b);

// //========================================================================================
// //Program to calculate total and average
// //======================================

// let total, average;
// total = a + b;
// average = total / 2;
// console.log("Total = ", total);
// console.log("Average = ", average);

// //========================================================================================
// //Program for larger number
// //==========================

// a = 23;
// b = 34;
// if (a > b) {
//   console.log(`The larger number is ${a}`);
// } else {
//   console.log(`The larger number is ${b}`);
// }

// //======================================================================================
// //Program to check number is positive or not
// //==========================================
// //a = 0;
// if (a > 0) {
//   console.log(`${a} is Positive`);
// } else if (a == 0) {
//   console.log(`'a' is Zero`);
// } else {
//   console.log(`${a} is Negative`);
// }

// //=======================================================================================
// //Program to check number is greater than 10
// //==========================================

// if (a > 10) {
//   console.log(`${a} is Greater than 10`);
// } else {
//   console.log(`${a} is not Greater than 10`);
// }

// //=======================================================================================
// //Program to find given Number is even or odd
// //============================================

// a = 24;
// b = 43;
// if (a % 2 == 0) {
//   console.log(`${a} is Even number`);
// } else {
//   console.log(`${a} is Odd number`);
// }

// if (b % 2 == 0) {
//   console.log(`${b} is Even number`);
// } else {
//   console.log(`${b} is Odd number`);
// }

// //================================================================================
// //Program to check whether number is divisible by 5
// //==================================================

// if (a % 5 == 0) {
//   console.log(`Number ${a} is divisible by 5`);
// } else {
//   console.log(`Number ${a} is not divisible by 5`);
// }

// //===================================================================================
// //To check whether number is multiple of 7
// //=========================================

// a = 49;
// if (a % 7 == 0) {
//   console.log(`Number ${a} is Multiples of 7`);
// } else {
//   console.log(`Number ${a} is not multiples of 7`);
// }

// //=================================================================================
// //Ascending and Descending order of 3 numbers
// //============================================

// let x, y, z;
// x = 2;
// y = 54;
// z = 32;
// // x = prompt("Enter the value ", x);
// // y = prompt("Enter the value ", y);
// // z = prompt("Enter the value ", z);
// if (x <= y && x <= z) {
//   if (z <= y) {
//     //console.log(`Ascending Order is ${x}, ${z}, ${y}`);
//     console.log(`Ascending Order is `, x, z, y);
//     //console.log(`Decending Order is ${(y, z, x)}`);
//     console.log(`Decending Order is `, y, z, x);
//   } else {
//     console.log(`Ascending Order is ${(x, y, z)}`);
//     console.log(`Decending Order is ${(z, y, x)}`);
//   }
// } else if (y <= x && y <= z) {
//   if (z <= x) {
//     console.log(`Ascending Order is ${(y, z, x)}`);
//     console.log(`Decending Order is ${(x, z, y)}`);
//   } else {
//     console.log(`Ascending Order is ${(y, x, z)}`);
//     console.log(`Decending Order is ${(z, x, y)}`);
//   }
// } else if (z <= x && z <= y) {
//   if (x <= y) {
//     console.log(`Ascending Order is ${(z, x, y)}`);
//     console.log(`Decending Order is ${(y, x, z)}`);
//   } else {
//     console.log(`Ascending Order is ${(z, y, x)}`);
//     console.log(`Decending Order is ${(x, y, z)}`);
//   }
// }

//=================================================================================
//Program for Quadratic Equation
//==================================

// let x1, x2, d;
// let c = 4;
// d = b * b - 4 * a * c;
// x1 = (-b / 2) * a + (Math.sqrt(d) / 2) * a;
// x2 = (-b / 2) * a - (Math.sqrt(d) / 2) * a;
// console.log("Quadractic Equation : ", x1);
// console.log("Quadractic Equation : ", x2);

//=======================================================================================
//Print grade based on marks of a student
//========================================

// let marks = 90;
// if (marks >= 81) {
//   console.log("S Grade");
// } else if (marks <= 80 && marks >= 70) {
//   console.log("A Grade");
// } else if (marks <= 69 && marks >= 50) {
//   console.log("B Grade");
// } else if (marks <= 49 && marks >= 40) {
//   console.log("C Grade");
// } else {
//   console.log("Fail");
// }

//=====================================================================================
//Program to find marriage eligibility
//====================================

// let age = 21;

// if (age >= 21) {
//   console.log("He/She is eligible for the Marriage");
// } else {
//   console.log("He/She is not eligible for the Marriage");
// }

//=====================================================================
//Print N numbers in sequence
//=================================

// let i, N;
// N = 10;
// for (i = 0; i <= N; i++) {
//   console.log(i);
// }

//===========================================================================
//Print N numbers in reverse order
//=================================
// N = 0;
// for (let i = 10; i >= N; i--) {
//   console.log(i);
// }

// //===========================================================================
// //Print first N even numbers and Print N odd numbers
// //==================================================

// for (let i = 0; i <= N; i++) {
//   if (i % 2 == 0) {
//     console.log("Even Numbers : ", i);
//   } else {
//     console.log("Odd Numbers : ", i);
//   }
// }

// //====================================================================================
// //Print reverse of a number
// //===========================

// let rev = 0,
//   rem;
// let v = 246;
// /* while(v!=0){
//   rem=v%10;         //1st iteration rem=6,2nd rem=4
//   rev=rev*10+rem;   //0*10+6=6,6*10+4=64
//   v=Moth.floor(v/10);            //for remove last digit
// } */
// do {
//   rev = rev * 10 + (v % 10);
//   v = Math.floor(v / 10);
// } while (v > 0);
// console.log(rev);

// //=======================================================================================
// //Check number is Armstrong or not
// //=================================

// let swap;
// sum = 0;
// n = 407;
// swap = n;
// while (n > 0) {
//   sum = sum + (n % 10) ** 3;
//   n = Math.floor(n / 10);
// }
// if (sum == swap) {
//   console.log("Amstrong");
// } else {
//   console.log("Not Amstrong");
// }

// //===============================================================================
// //Print Table of given number
// //================================

// i = 1;
// n = 5;
// while (i < 11) {
//   console.log(`Multiplication of ${i} * ${n} = `, i * n);
//   i++;
// }

// //==============================================================================
// //Factorial of a number using for loop
// //=======================================

// let fact = 1;
// for (let i = 1; i <= n; i++) {
//   fact = fact * i;
// }
// console.log(fact);

// //====================================================================================
// //Check number is prime or not
// //===============================

// let prime = 0;
// let n = 6;
// for (let i = 2; i <= n / 2; i++) {
//   if (n % i == 0) {
//     prime = 1;
//     break;
//   }
// }
// if (prime == 0) {
//   console.log("Prime Number");
// } else {
//   console.log("Not Prime Number");
// }

//=======================================================================================
//Print prime numbers within range
//================================

/* let a = 2,
  b = 50,
  prime;

for (let i = a; i < b; ++i) 
{
  prime = 0;
  for (let j = 2; j <= i / 2; ++j) {
    if (i % j == 0) {
      prime = 1;
      break;
    }
  }
  if ( prime == 0) {
    console.log("Prime Number", i);
    ++a;
  }
}
 */

//==================================================================
//Print Fibonacci series
//========================

let n = 5,
  fib;
let t1 = 0,
  t2 = 1;
fib = t1 + t2;
console.log(t1);
console.log(t2);
for (let i = 1; i < n; i++) {
  console.log(fib);
  t1 = t2;
  t2 = fib;
  fib = t1 + t2;
}


