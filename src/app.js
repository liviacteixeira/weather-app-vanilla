function displayTemperature(response) {
  console.log(response);

  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;

  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;

  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
}

let apiKey = "452364353698f2262270ab4439ea49bd";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Lisbon&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
