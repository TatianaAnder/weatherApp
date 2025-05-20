const apiKey = 'a714cdf4e4e47d4770a31d991fbe1ab6';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=tbilisi';

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temperature').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';
}
checkWeather();

