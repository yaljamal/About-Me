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
var counter = 4;
var guessNumber = prompt(' guess a faverate number from 1 to 9 ');
guessNumber = parseInt(guessNumber);
if (guessNumber !== 7) {
    for (var i = 2; i <= counter; i++) {
        if (guessNumber > 7) {
            guessNumber = prompt('this number above my favarate number');
            parseInt(guessNumber);
        } else if (guessNumber < 7) {
            guessNumber = prompt('this number less my favarate number ');
            parseInt(guessNumber);
        }
        else if (i === counter) {
            alert('Nooooo it is not my favarate number  :( My Favarate number is 7 :) ');
        }
    }
} else if (guessNumber === 7) {
    alert('this is my faverate number :)');
    currect++;
    // console.log(currect);

}
var place = ['palestine', 'turkey', 'germany', 'paris', 'rome', 'egypt'];
var guess = prompt('guess what is the favarte place in form : ').toLowerCase();
function serch(place, guess) {
    for (var j = 0; j < place.length - 1; j++) {
        if (guess === place[j]) {
            return true;
        } else {
            return false;

        }
    }
}
var incloud = serch(place, guess);
if (incloud === true) {
    alert(guess + ' this is in my faverate place  ');
}
else {
    alert(guess + ' this is not in my faverate place  ');

}


 alert(" Thank You " + urname);
 alert('ur currect answer is  ' + currect);

// console.log(" Your Name Is : "  + name);
// console.log(" your answer is : "+ food);
// console.log(" your answer is : "+car);
// console.log(" your answer is : "+phone);
// console.log(" your answer is : "+drink);

