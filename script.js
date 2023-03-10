// first 
var msg = Number(window.prompt('Guess the number from 1 to 10'));
console.log(msg);
var randNum =  Math.floor(Math.random() * 10) + 1;
console.log(randNum);
var guessed = (msg === randNum);
console.log(guessed);
alert('You entered a number: ' + msg + ' Random number: ' +  randNum + ' Guessed: ' + guessed);
// second
var msg1 = Number(window.prompt('Enter a single digit from 1 to 10'));
console.log(msg1);
var msg2 = Number(window.prompt('Enter a two-digit number from 10 to 100'));
console.log(msg2);
var msg3 = Number(window.prompt('enter a three-digit number from 100 to 1000'));
console.log(msg3);
var arithmeticMean = (msg1 + msg2 + msg3);
console.log(arithmeticMean);
alert('You entered the following numbers: ' + msg1 + ', ' + msg2 + ', ' + msg3 + '.' + ' The arithmetic mean is: ' + arithmeticMean / 3);
// third
let number = prompt('Enter numbers without spaces, through a comma');
let arr = number.split(',');
console.log(arr);
let sum = 0;
for (let i=0; i < arr.length; i++) {
    sum += +(arr[i]);
}
console.log(sum);
alert('You entered the following numbers: ' + number + '. ' + 'The arithmetic mean is: ' + sum / 3 + ' Good Luck!');


