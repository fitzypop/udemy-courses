const h1 = document.getElementById('main-title');
h1.textContent = 'Some new Title!';

console.log(document.createElement('P'));

const lastLi = document.querySelector('li:last-of-type');
lastLi.textContent = lastLi.textContent + ' (Changed!)';

const body = document.body;
console.dir(body.children);

// gets a static (not-live) NodeList of elements
// const allLis = document.querySelectorAll('li');
// get a live NodeList (i.e. can change with DOM Changes)
const allLis = document.getElementsByTagName('li');
for (const liElem of allLis) {
  console.dir(liElem);
}
