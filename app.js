function check() {
    let city = document.getElementById('place').value
    let name = document.getElementById("name")
    let degrees = document.getElementById("degrees")
    let windSpeed = document.getElementById("windSpeed")
    let humidity = document.getElementById("humidity")
    let Pressure = document.getElementById("Pressure")
    let Max_Temp = document.getElementById("Max_Temp")
    let Min_Temp = document.getElementById("Min_Temp")
    let Clouds = document.getElementById("Clouds")
    let Sea_Level = document.getElementById("Sea_Level")
    let Ground_Level = document.getElementById("Ground_Level")
    let ID = document.getElementById("ID")
    let Visibility = document.getElementById("Visibility")

    let apiKey = `87a4a0fbe8b80abf8fbe9795737615ff`
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            name.innerHTML = data.name
            degrees.innerHTML = Math.floor(data.main.feels_like - 273) + '°C'
            windSpeed.innerHTML = data.wind.speed + 'km/h'
            humidity.innerHTML = data.main.humidity + '%'
            Pressure.innerHTML = data.main.pressure + '%'
            Max_Temp.innerHTML = data.main.temp_max + '°C'
            Min_Temp.innerHTML = data.main.temp_min + '°C'
            Clouds.innerHTML = data.clouds.all
            Sea_Level.innerHTML = data.main.sea_level + 'fts'
            Ground_Level.innerHTML = data.main.grnd_level + '%'
            ID.innerHTML = data.id
            Visibility.innerHTML = data.visibility

        });
}