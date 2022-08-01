// Practice Problem 1 

// var fruits = ['Apple', 'Banana', 'Orange'];

// a) Find the index of "Banana" and replace 'Banana' with 'Mango'.
// b) Remove 'Orange' and add 'Watermwlon'.

// solving bleow :

// a) 
// i) a) Find the index of "Banana"
var fruits = ['Apple', 'Banana', 'Orange'];

var findIndex = fruits.indexOf('Banana')
console.log(findIndex);

// a) 

// ii) replace 'Banana' with 'Mango'.

var fruits = ['Apple', 'Banana', 'Orange'];

fruits[2] = 'Mango'

console.log(fruits);


// Practice Problem 2 

/*
*you and your friends Tom, Jane, Peter and John got their final exam resulrs. Your total score is 85. Tom total score is 66. Jane's total score is 95. Peter's total score is 56 and john's total score is 40. %he grading chart is

            80 or above A grade 
            60 or above B grade
            50 or above C grade
            40 or above D grade
            39 or less => F grade

            Write a program to find your and your friend's grades using if-else.

**/

// c) 

var myNumber = 65;
var tomNumber = 66;
var janeNumber = 95;
var peterNumber = 56;
var johnNumber = 40;

var aGrade = 80;
var bGrade = 60;
var cGrade = 50;
var dGrade = 40;
var fGrade = 39;

if (myNumber > aGrade) {
    console.log('I am getting A grade and it is good result.');
} else if (myNumber > bGrade) {
    console.log('I am getting B grade and it is low grade.');
} else if (myNumber > cGrade) {
    console.log('I am getting C grade and it is not good result.');
} else if (myNumber > dGrade) {
    console.log('I am getting D grade and it id bad result.');
} else {
    console.log('I am failtus.');
}