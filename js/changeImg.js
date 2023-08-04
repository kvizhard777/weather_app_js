const changeImgFunc = (data) => {
  // Change Weather Image
  const dataWeather = data.weather[0].main;
  const weatherImg = document.querySelector('#weather-img');

  if (dataWeather === "Clear") {
    weatherImg.src = 'images/clear.png';

  } else if (dataWeather === "Clouds") {
    weatherImg.src = 'images/clouds.png';

  } else if (dataWeather === "Drizzle") {
    weatherImg.src = 'images/drizzle.png';

  } else if (dataWeather === "Rain") {
    weatherImg.src = 'images/rain.png';

  } else if (dataWeather === "Snow") {
    weatherImg.src = 'images/snow.png';

  } else if (dataWeather === "Mist") {
    weatherImg.src = 'images/mist.png';

  } else if (dataWeather === "Fog") {
    weatherImg.src = 'images/fog.png';

  } else {
    weatherImg.src = 'images/clear.png';
  }
}

export default changeImgFunc;