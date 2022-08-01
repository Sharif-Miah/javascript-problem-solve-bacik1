// problem 3 

// 1) You are given three numbers 13, 79, and 45. Write a program that will print the largest number using if-else.

// solving below :

var a = 13;
var b = 79;
var c = 45;

if (a > b) {
    console.log(a + ' Number is largest number');
} else if (b > c) {
    console.log(b + ' Number is larget number');
} else if (c > b) {
    console.log(c + ' Number is largest number');
} else if (c < a) {
    console.log(c + 'Number is largest number');
} else {
    console.log('We cant not find largest number');
}

// 2)

// You are given triangle with the sides 9, 8, 9. Write a program to check whether a triangle is Isosceles or not using if-else

// Isoscles => two sides are equal

var firstSide = 9;
var secondSide = 8;
var thirdSide = 9;

if (firstSide == secondSide && secondSide == thirdSide) {
    console.log('Two side is  not equel');
} else if (firstSide == thirdSide) {
    console.log('Two side is Equel');
} else {
    console.log('We do not find equel number');
}

