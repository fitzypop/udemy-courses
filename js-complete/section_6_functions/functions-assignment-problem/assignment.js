const sayHello = (name) => console.log('Hi ' + name);
const sayHello2 = (phrase, name) => console.log(`${phrase} ${name}`);
const sayHello3 = () => console.log('Hello, World!');
const sayHello4 = (name) => `Hi ${name}`;

sayHello('langnostic');
sayHello2('Sup', 'dude');
sayHello3();
console.log(sayHello4('dogg'));

const checkInput = (callback, ...strings) => {
  if (!!strings.length || strings.every((str) => !!str)) {
    callback();
  }
};

checkInput(() => console.log('All not empty!'), 'one', 'two', 'derp');
