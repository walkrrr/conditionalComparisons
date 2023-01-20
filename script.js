//Exercise #1: Skills practiced: conditional statements, comparison operators

var twelve = 12;
var number12 = "twelve";

if (twelve === number12) {
  console.log("This is the numerical version of the number 12!");
} else if (number12 === twelve) {
  console.log("This is the worded version of the number 12!");
} else {
  console.log("Dude! Where's the number 12?");
}

//Exercise #2: Skills practiced: conditional statements, comparison operators, prompt(), Number()

var hoursOfSleep = prompt(
  "How many hours did you sleep last night? Enter a whole number between 0-12."
);

if (hoursOfSleep > 12) {
  console.log("Be truthful and try again.");
} else if (hoursOfSleep >= 8) {
  console.log("Congrats! You got enough sleep last night!");
} else if (hoursOfSleep >= 5) {
  console.log("You did okay, but sure you get more zzzs tonight.");
} else {
  console.log("Get more sleep tonight!");
}

//Exercise #3 Skills practiced:  conditional statements, comparison operators, alert(), prompt(), Number(), arithmetic operators, template literals

var howManyChocolates = prompt(
  "How many pieces of chocolate do you want? Enter a number between 1-10."
);
var leftoverChocolates = 10 - howManyChocolates;

if (leftoverChocolates === 10) {
  console.log("Are you sure you don't want any chocolate?");
} else if (leftoverChocolates >= 6) {
  console.log("You ate enough chocolates in moderation.");
} else if (leftoverChocolates >= 3) {
  console.log("You had quite a few chocolates today, didn't you?");
} else {
  console.log("You are a greedy choclaholic!");
}
