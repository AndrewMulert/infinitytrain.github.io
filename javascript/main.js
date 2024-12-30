year = document.querySelector("#year").textContent = new Date().getFullYear();

let isSmallScreen = window.innerWidth < 768;

document.getElementById("dropDown").addEventListener('click', menuToggle);
const links = document.querySelectorAll('.page_link');

function menuToggle() {
  if (isSmallScreen) {
    links.forEach(link => {
      link.style.display = link.style.display === 'block' ? 'none' : 'block';
    });
  } else {
    links.forEach(link => {
      link.style.display = 'block';
    });
  }
}

var prevScrollpos = window.scrollY;
window.addEventListener('scroll', handleScroll);

window.addEventListener('load', setNone);

function setNone() {
    if (isSmallScreen) {
      links.forEach(link => {
        link.style.display = 'none';
      });
    }
}

function handleScroll() {
  const links = document.querySelectorAll('.page_link');
  const isOpen = links[0].style.display === 'block';

  if (isOpen && isSmallScreen) {
    links.forEach(link => {
      link.style.display = 'none';
    });
  }
}

function countUp () {
const startTime = new Date("2021-04-15 00:00:00");
const currentTime = new Date();

const timePast = currentTime - startTime;
const totalSeconds = Math.floor(timePast / 1000); 

// Calculate years
const years = Math.floor(totalSeconds / (365.25 * 24 * 60 * 60)); // Approximate year (365.25 days/year)


// Calculate months
const months = Math.floor(totalSeconds / (30.44 * 24 * 60 * 60)); // Approximate month (30.44 days/month)
const monthCalc = (Math.round(((months / 12) - years) * 12));

// Calculate days
const days = Math.floor(totalSeconds / (24 * 60 * 60));
const dayCalc = (Math.round((((days/365.25) - years)* 365.25)/30));

// Calculate hours
const hours = Math.floor(totalSeconds / (60 * 60));
const hourCalc = (Math.round(((hours/8760) - years) * 24));

// Calculate minutes
const minutes = Math.floor(totalSeconds / 60);
const minCalc = (totalSeconds - (minutes * 60));

// Calculate seconds
const seconds = totalSeconds;
const second2 = (Math.round(((seconds/31540000) - years) * 60));

// Display the results
console.log(timePast);
console.log(`${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
console.log(`${years} years, ${monthCalc} months, ${dayCalc} days, ${hourCalc} hours, ${minCalc} minutes, ${second2} seconds`);

yearLabel = document.getElementById("years").textContent = (`${years}`);
monthLabel = document.getElementById("months").textContent = (`${monthCalc}`);
dayLabel = document.getElementById("days").textContent = (`${dayCalc}`);
hourLabel = document.getElementById("hours").textContent = (`${hourCalc}`);
minuteLabel = document.getElementById("minutes").textContent = (`${minCalc}`);

}

countUp();

/*const startTime = new Date("2021-04-15 00:00:00");
const currentTime = new Date();

const timePast = currentTime - startTime;
const daysCalc = Math.floor(timePast / (1000 * 60 * 60 * 24)); 

var daysLabel = document.getElementById("days");
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");

// Initialize totalSeconds with the initial number of seconds from daysCalc
var totalSeconds = daysCalc * 24 * 60 * 60; 

setInterval(setTime, 1000);

daysLabel.innerHTML = daysCalc; 

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds%60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds/60));
}

function pad(val) {
  var valString = val + "";
  if(valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}*/