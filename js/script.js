'use strict'
// var name = confirm("is my nicname is nana ?");
// var food = confirm(" I love the bamia ? ");
// var car = confirm("the mosting is the favarit car ?");
// var phone = confirm("Is my phone samsong ?");
// var drink = confirm("I love the coffe ?");
var urname = prompt("What is Your name ?");
alert("Wlecom My freind " + urname);
var name = prompt("is my nicname is nana ? yes /no OR y/n ").toLowerCase();
if (name === "yes" || name === "y") {
    alert(" Yes My nicename is NANA :)");
} else if (name === "no" || name === "n") {
    alert(" No My nicename is NANA :)");
} else {
    alert("your answer is wrong");
}
var food = prompt(" I love the bamia ? yes /no OR y/n  ").toLowerCase();
if (food === "yes" || food === "y") {
    alert(" No i hate the bamia");
} else if (food === "no" || food === "n") {
    alert(" Yes i hate the bamia");
} else {
    alert("your answer is wrong");
}
var car = prompt("the mosting is the favarit car ? yes /no OR y/n  ").toLowerCase();
if (car === "yes" || car === "y") {
    alert(" yes this my favarate car ");
} else if (car === "no" || car === "n") {
    alert(" No this my favarate car ");
} else {
    alert("your answer is wrong");
}
var phone = prompt("Is my phone samsong ? yes /no OR y/n  ").toLowerCase();
if (phone === "yes" || phone === "y") {
    alert("No My phone is Iphone :) ");
} else if (phone === "no" || phone === "n") {
    alert(" Yes My phone is Iphone :) ");
} else {
    alert("your answer is wrong");
}
var drink = prompt("I love the coffe ? yes /no OR y/n ").toLowerCase();
if (drink === "yes" || drink === "y") {
    alert("Yesssssss I love the coffe  :) ");
} else if (drink === "no" || drink === "n") {
    alert(" Nooooooo I love the coffe  :) ");
} else {
    alert("your answer is wrong");
}
alert(" Thank You " + urname);
console.log(" Your Name Is : "  + name);
console.log(" your answer is : "+ food);
console.log(" your answer is : "+car);
console.log(" your answer is : "+phone);
console.log(" your answer is : "+drink);


