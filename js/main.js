import changeImgFunc from "./changeImg.js";
import changeTextFunc from "./changeText.js";
import currentDateFunc from "./currentDate.js";

// API
const apiKey = 'b7a1fe20fd6bec1aa911a8fee98ee68f';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric`;

const searchBtn = document.querySelector('#search-btn');
const weatherWrapper = document.querySelector('.weather__wrapper');

// Current Date
currentDateFunc();

// Check Weather
const checkWeather = () => {
  weatherWrapper.classList.remove('hidden');
  const searchCity = document.querySelector('#search').value;

  // Claim Data
  async function claimData() {
    const response = await fetch(`${apiUrl}&q=${searchCity}`);
    const data = await response.json();

    // Change Text
    changeTextFunc(data);

    // Change Image
    changeImgFunc(data);
  }

  claimData();
}

// Button Event Listener
searchBtn.addEventListener('click', () => checkWeather());