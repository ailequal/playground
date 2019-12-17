// ask name
// var userText = prompt("What's your name?");
// console.log(userText);

// hello world goofy
// var text = 'hello world';
// var name = 'goofy';
// console.log(text + ' ' + name);

// undefined
// console.log(whoIsThis);
// var whoIsThis = 'whoIsThis';
// console.log(whoIsThis);

// sum
// var numOne = 5;
// var numTwo = 10;
// var sum = (numOne + numTwo);
// console.log(sum);

// test
// var firstNum = 10;
// var secondNum = 20;
// var total = firstNum + secondNum;
//
// console.log(firstNum);
// console.log(secondNum);
// console.log(total);
//
// document.getElementById('firstNum').innerHTML = firstNum + (' +');
// document.getElementById('secondNum').innerHTML = secondNum + (' =');
// document.getElementById('total').innerHTML = total;

// how old are you?
var userAge = prompt('How old are you?')
userAge = parseInt(userAge);
console.log(userAge);

// you were born in...
var timeYear = 2019;
var userYear = timeYear - userAge;
console.log(userYear);

// printing the year of born
document.getElementById('user_year').innerHTML = 'You were born in ' + userYear + '.';
