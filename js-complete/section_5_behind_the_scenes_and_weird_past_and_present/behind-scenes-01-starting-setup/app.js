// let myName = "langnostic";

// if (myName === "langnostic") {
//   // this variable will be hoisted to global scope with 'var'
//   // var hobbies = ["Coding", "Music", "Guitar"];
//   // 'let' limits variables to a given scope
//   let hobbies = ["Coding", "Music", "Guitar"];
//   console.log(hobbies);
// }

// console.log(myName, hobbies);

// (function () {
//   let age = 30;
//   let myName = "Juan";
//   console.log(myName, age);
// })();

// strict mode disables some of the 'nonsense' js features
"use strict";

// var will 'hoist' userName to the top of the scope, and initialize to 'undefined'
// // var userName;
// let or const variables will throw an error
console.log(userName);

let userName = "langnostic";
