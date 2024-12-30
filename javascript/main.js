year = document.querySelector("#year").textContent = new Date().getFullYear();
console.log(`${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
console.log(`${years} years, ${monthCalc} months, ${dayCalc} days, ${hourCalc} hours, ${minCalc} minutes, ${secCalc} seconds`);

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
const minCalc = (Math.round(((minutes/525600) - years) * 60));

// Calculate seconds
const seconds = totalSeconds;
const secCalc = (Math.round(((seconds/31540000) - years) * 31540000));
const lastDigit = (Math.round(secCalc % 60));

function pad(val) {
  var valString = val + "";
  if(valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

// Display the results

yearLabel = document.getElementById("years").textContent = (`${years}`);
monthLabel = document.getElementById("months").textContent = (`${pad(monthCalc)}`);
dayLabel = document.getElementById("days").textContent = (`${pad(dayCalc)}`);
hourLabel = document.getElementById("hours").textContent = (`${pad(hourCalc)}`);
minuteLabel = document.getElementById("minutes").textContent = (`${pad(minCalc)}`);
secondLabel = document.getElementById("seconds").textContent = (`${pad(lastDigit)}`);

}

setInterval(countUp, 1000);