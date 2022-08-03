// problem 3 

// 1) You are given three numbers 13, 79, and 45. Write a program that will print the largest number using if-else.

// solving below :

// var num1 = 13;
// var num2 = 79;
// var num3 = 45;


// if (num1 > num2) {
//     if (num1 > num3) {
//         console.log(num1);
//     } else {
//         console.log(num3);
//     }
// } else {
//     if (num2 > num3) {
//         console.log(num2);
//     } else {
//         console.log(num3);
//     }
// }




// 2)

// You are given triangle with the sides 9, 8, 9. Write a program to check whether a triangle is Isosceles or not using if-else

// Isoscles => two sides are equal

var firstSide = 9;
var secondSide = 8;
var thirdSide = 9;

if (firstSide === secondSide) {
    if (firstSide === thirdSide) {
        console.log(firstSide + ' and ' + thirdSide + ' is equel.');
    } else {
        console.log(firstSide + ' and ' + secondSide + ' is equel.');
    }
} else {
    if (secondSide === thirdSide) {
        console.log(secondSide + ' and ' + thirdSide + ' is equel.');
    } else {
        console.log(firstSide + ' and ' + thirdSide + ' is equel.');
    }
}





