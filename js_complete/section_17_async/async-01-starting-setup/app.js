const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = (options) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (sucess) => resolve(sucess),
      (error) => reject(error),
      options
    );
  });
  return promise;
};

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Done!'), duration);
  });
  return promise;
};

async function trackUserHandler() {
  let posData, timerData;
  try {
    posData = await getPosition();
    timerData = await setTimer(2000);
  } catch (error) {
    console.log(error);
  }
  console.log({ timerData, posData });
  // getPosition().then((posData) => console.log(posData));

  // Promise chaining, with error handling. position of catch block matters
  // can also use finally, pretty much does the samething as finally in c#
  // let positionData;
  // getPosition()
  // .then((posData) => {
  // positionData = posData;
  // return setTimer(2000);
  // })
  // .catch((err) => console.log(err)) // position of catch block matters in chain
  // .then((data) => console.log(data));

  // setTimer(1000).then(() => console.log('Timer done'));
  // console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);

// Resolves when the fastest promise finishes
Promise.race([getPosition(), setTimer(1000)]).then((data) => console.log(data));

// Waits for all promise to resolve, or one to error
Promise.all([getPosition(), setTimer(1000)]).then((promiseData) =>
  console.log({ promiseData })
);

// Waits for all promise to settle (doesn't stop on error)
Promise.allSettled([getPosition(), setTimer(1000)]).then((promiseData) =>
  console.log(promiseData)
);
// let result = 0;
// for (let i = 0; i < 10000000; i++) {
//   result += i;
// }

// console.log(result);
