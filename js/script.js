'use strict';
var currect = 0;
// console.log(currect);
var urname = prompt('What is Your name ?');
alert('Wlecom My freind ' + urname);

var name = prompt('is my nicname is nana ? yes /no OR y/n ').toLowerCase();

if (name === "yes" || name === "y") {
    alert('Yes My nicename is NANA :)');
    currect++;
    // console.log(currect);

} else if (name === 'no' || name === 'n') {
    alert(' No My nicename is NANA :)');
} else {
    alert('your answer is wrong');
}
var food = prompt(' I love the bamia ? yes /no OR y/n  ').toLowerCase();
if (food === 'yes' || food === 'y') {
    alert(' No i hate the bamia');
    // console.log(currect);

} else if (food === 'no' || food === 'n') {
    alert(' Yes i hate the bamia');
    currect++;
} else {
    alert('your answer is wrong');
}
var car = prompt('the mosting is the favarit car ? yes /no OR y/n').toLowerCase();
if (car === 'yes' || car === 'y') {
    alert(' yes this my favarate car ');
    currect++;
    // console.log(currect);

} else if (car === 'no' || car === 'n') {
    alert('No this my favarate car ');
} else {
    alert('your answer is wrong');
}
var phone = prompt('Is my phone samsong ? yes /no OR y/n').toLowerCase();
if (phone === 'yes' || phone === 'y') {
    alert('No My phone is Iphone :) ');
    // console.log(currect);

} else if (phone === 'no' || phone === 'n') {
    alert(' Yes My phone is Iphone :) ');
    currect++;

} else {
    alert('your answer is wrong');
}
var drink = prompt('I love the coffe ? yes /no OR y/n ').toLowerCase();
if (drink === 'yes' || drink === 'y') {
    alert('Yesssssss I love the coffe  :) ');
    currect++;
    // console.log(currect);

} else if (drink === 'no' || drink === 'n') {
    alert(' Nooooooo I love the coffe  :) ');
} else {
    alert('your answer is wrong');
}
for (var i = 0; i < 4;i++) {
    var guessNumber = parseInt(prompt(' guess a faverate number from 1 to 9 '));
    if (guessNumber === 7) {
        alert('Thats right(:) ');
        currect++;
        break;
    } else if (guessNumber > 7) {
        alert('this number above my favarate number');
    } else if (guessNumber < 7) {
        alert('this number less my favarate number');
    }
}
var places = ['palestine', 'turkey', 'germany', 'paris', 'rome', 'egypt'];
  var guess =prompt('guess what is the favarte place in form : ').toLowerCase();
  var rightGuess = false;
  for (var guessAttempts = 0; guessAttempts < 5; guessAttempts++) {
    for (var i = 0; i < places.length; i++) {
      if (guess === places[i]) {
        rightGuess = true;
      }
    }
    if (rightGuess === true) {
       currect++;
     alert('That\'s right! ' + guess + ' is one of my favorite place !');
      break;
    }
    guess = prompt('Wrong guess, try another place !');
  }
alert(" Thank You " + urname);
alert('ur currect answer is  ' + currect);
// console.log(currect);
// console.log(" Your Name Is : "  + name);
// console.log(" your answer is : "+ food);
// console.log(" your answer is : "+car);
// console.log(" your answer is : "+phone);
// console.log(" your answer is : "+drink);

