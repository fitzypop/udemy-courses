// document.querySelector('button').onclick(() => {
//   alert('Button was clicked!');
// });

const buttons = document.querySelectorAll('button');

const onButtonClicked = (event) => {
  // event.target.disabled = true;
  console.log(event);
};
const anotherEventHandler = () => alert('Some other text');

const boundFn = onButtonClicked.bind(this);

// These type of event handlers only allow one event
// button.onclick = onButtonClicked;
// button.onclick = anotherEventHandler;

// These type of handlers allow multiple functions
// buttons.addEventListener('click', onButtonClicked);

// setTimeout(() => buttons.removeEventListener('click', onButtonClicked), 2000);

buttons.forEach((btn) => btn.addEventListener('mouseenter', onButtonClicked));

// window.addEventListener('scroll', event => console.log(event));

const form = document.querySelector('form');
form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(event)
});

const div = document.querySelector('div');
const button = document.querySelector('button');

div.addEventListener('click', e => {
  console.log('CLICKED DIV');
  console.log(e);
})

button.addEventListener('click', function(e) {
  e.stopPropagation();
  console.log('CLICKED BUTTON');
  console.log(e);
  console.log(this);
})

const listItems = document.querySelectorAll('li');

const list = document.querySelector('ul');

// the click event will propagate up to the ul element
// and we can use event.target to get the actuall clicked element
// then use 'closest' func to get the list item, regardless if h2, p or li got clicekd
// replaces click events on all elements
list.addEventListener('click', event => {
  // event.target.classList.toggle('highlight')
  event.target.closest('li').classList.toggle('highlight');
  form.submit();
});

// listItems.forEach(item => {
//   item.addEventListener('click', event => event.target.classList.toggle('highlight'))
// })
