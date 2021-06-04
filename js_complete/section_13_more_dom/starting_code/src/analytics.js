console.log('Analytics engine started');

const intervalId = setInterval(() => {
  console.log('Sending Analytics');
}, 2000);

document.getElementById('stop-analytics-btn').onclick = () => {
  clearInterval(intervalId);
};
