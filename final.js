function connect(){
    var searchTerm = document.getElementById("searchBox").value ;

    var url = `https://openweathermap.org/api/one-call-3${searchTerm}&appid={0aaf660f76d0960bde8633f5ae05d775}`
    console.log (url)

    fetch (url)
    .then (res => res.json())
    .then (data => displayWeatherData(data))
    .catch (error => console.log('Error;', error()) ;

}
function displayWeatherData(data) {
    const weather = {
        temperature: data.main.temp - 273.15, // Kelvin to Celsius
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        weatherIcon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        description: data.weather[0].description,
        city: data.name,
        country: data.sys.country
    };
    const dataItem = document.createElement('div');
    dataItem.classList.add('data-item');
    dataItem.innerHTML = `
        <h2>${weather.city}, ${weather.country}</h2>
        <img src="${weather.weatherIcon}" alt="${weather.description}">
        <p><strong>Temperature:</strong> ${weather.temperature.toFixed(1)} &#8451;</p>
        <p><strong>Humidity:</strong> ${weather.humidity}%</p>
        <p><strong>Pressure:</strong> ${weather.pressure} hPa</p>
    `;
    weatherData.appendChild(dataItem);
}
