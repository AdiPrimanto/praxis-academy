// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// Program Structure

// console.log("Saya belajar Javascript");
// document.write("Hello World!");

// let ten = 10;
// console.log(ten * ten);

// let mood = "light";
// console.log(mood);

// let mood = "dark";
// console.log(mood);

// let luigisDebt = 140;
// luigisDebt = luigisDebt - 35;
// console.log(luigisDebt);

// let one = 1,
//     two = 2;
// console.log(one + two);

// var name = "Adi";
// const greeting = "Hello";
// console.log(greeting + ' ' + name);

// prompt("Enter passcode");

// let x = 30;
// console.log("the value of x is", x);

// console.log(Math.max(2, 4));

// console.log(Math.min(2, 4) + 100);

// let theNumber = Number(prompt("Pick a number"));
// console.log("Your number is the square root of " +
//             theNumber * theNumber);

// if (1 + 1 == 2) console.log("It's true");

let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " +
              theNumber * theNumber);
} else {
  console.log("Hey. Why didn't you give me a number?");
}