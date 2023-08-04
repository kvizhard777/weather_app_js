const changeTextFunc = (data) => {
  // Change Text
  const temperature = document.querySelector('#temp');
  const city = document.querySelector('#city');
  const humidity = document.querySelector('#humidity');
  const wind = document.querySelector('#wind');
  const visibility = document.querySelector('#visibility');

  city.textContent = data.name;
  temperature.textContent = `${data.main.temp.toFixed(1)} °C`;
  humidity.textContent = `${data.main.humidity} %`;
  wind.textContent = `${data.wind.speed} m/s`;
  visibility.textContent = `${data.visibility / 1000} km`
}

export default changeTextFunc;