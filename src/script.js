const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');


function showTime() {
  const deg = 6;

  let day = new Date();
  let hours = day.getHours() * 30;
  let minutes = day.getMinutes() * deg;
  let secunds = day.getSeconds() * deg;

  hr.style.transform = `rotateZ(${(hours) + (minutes/12)}deg)`;
  mn.style.transform = `rotateZ(${minutes}deg)`;
  sc.style.transform = `rotateZ(${secunds}deg)`; 
}

setInterval(showTime);