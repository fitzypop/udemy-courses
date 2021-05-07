const h1 = document.getElementById('main-title');
h1.textContent = 'Some new Title!';
h1.style.color = 'white';
h1.style.backgroundColor = 'black';
console.log(document.createElement('P'));

const lastLi = document.querySelector('li:last-of-type');
lastLi.textContent = lastLi.textContent + ' (Changed!)';

// const body = document.body;
// console.dir('body.children', body.children);

// // gets a static (not-live) NodeList of elements
// // const allLis = document.querySelectorAll('li');
// // get a live NodeList (i.e. can change with DOM Changes)
// const allLis = document.getElementsByTagName('li');
// for (const liElem of allLis) {
//   console.dir(liElem);
// }

// const ul = document.querySelector('ul');

// // Get all HTML Children
// console.log();
// console.log('ul.children', ul.children);

// // Get all Nodes, including whitespace in html
// console.log('ul.childNodes', ul.childNodes);

// // get first html child
// console.log('ul.firstElementChild', ul.firstElementChild);

// // get first child, including text nodes
// console.log('ul.firstChild', ul.firstChild);

// // same as above, but for the last element
// console.log('ul.lastElementChild', ul.lastElementChild);
// console.log('ul.lastChild', ul.lastChild);

// // get Parent Element, both methods return the same element
// const firstLi = document.querySelector('li');
// console.log('firstLi.partentNode', firstLi.parentNode);
// console.log('firstLi.parentElement', firstLi.parentElement);

// // Get any Ancestor that matches the selector
// console.log("firstLi.closest('body')", firstLi.closest('body'));

// // Get the first element in the body, should be header
// console.log('document.body.firstElementChild', document.body.firstElementChild);
// // Get the first child element of the header
// console.log(
//   'document.body.firstElementChild.firstElementChild',
//   document.body.firstElementChild.firstElementChild
// );

// // Getting sibling element
// console.log(
//   'document.body.firstElementChild.nextElementSibling',
//   document.body.firstElementChild.nextElementSibling
// );

const section = document.querySelector('section');
const button = document.querySelector('button');
button.onclick = () => {
  section.classList.toggle('invisible');
};
