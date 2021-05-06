const task3Element = document.getElementById('task-3');

function say_hi() {
  alert('Hello, World!');
}

function say_name(name) {
  alert(`Hello, ${name}!`);
}

say_hi();
say_name('Mark');

task3Element.addEventListener('click', say_fuck);

function something_stupid(name1, name2, name3) {
  return `${name1} ${name2} ${name3}`;
}

alert(something_stupid('Hello', 'JavaScript', 'World'));
