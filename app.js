function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#search-box").value;

  //let h1 = document.querySelector("h1");
  //h1.innerHTML = city;

  let apiKey = "d089054a2630e64bfc08bbc6o4f01t65";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);

function showTemperature(response) {
  let correctCityName = response.data.city;
  let h1 = document.querySelector("h1");
  h1.innerHTML = correctCityName;
  let temperature = Math.round(response.data.temperature.current);
  let temperatureDegree = document.querySelector("#temperature-value");
  temperatureDegree.innerHTML = `${temperature}`;
}

let now = new Date();
let currentTime = document.querySelector("#date-time");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

if (minutes < 10) {
  minutes = `0${minutes}`;
}

if (hours < 10) {
  hours = `0${hours}`;
}
let days = [
  `Sunday`,
  `Monday`,
  `Tuesday`,
  `Wednesday`,
  `Thursday`,
  `Friday`,
  `Saturday`,
];
let day = days[now.getDay()];
currentTime.innerHTML = `${day} ${hours}:${minutes}`;
