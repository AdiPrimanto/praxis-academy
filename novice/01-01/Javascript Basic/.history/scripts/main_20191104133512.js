// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// let iceCream = 'chocolate';
// if (iceCream === 'chocolate') {
//     alert('Yay, I love chocolate ice cream!');
// } else {
//     alert('Awwww, but chocolate is my favorite...');
// }

// let myVariable = document.querySelector('h1');
// alert('hello!');

// function multiply(num1, num2) {
//     let result = num1 * num2;
//     return result;
// }
// console.log(multiply(4, 7));
// console.log(multiply(20, 20));
// console.log(multiply(0.5, 3));

// document.querySelector('html').onclick = function() {
//     alert('Ouch! Stop poking me!');
// }

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox.png') {
      myImage.setAttribute ('src','images/firefox2.png');
    } else {
      myImage.setAttribute ('src','images/firefox.png');
    }
}