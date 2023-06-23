async function checkweather() {
    let city = document.getElementById("city").value;
    let result = document.getElementById("result");
    let windspeed = document.getElementById("wind");

    let api = await fetch(`https://geocode.maps.co/search?q=${city}`, {
        method: "GET"
    });

    let apiInJson = await api.json();
    let latitude = apiInJson[0].lat;
    let longitude = apiInJson[0].lon;

    let infoFromApi = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`, {
        method: "GET"
    })
    let infoFromApiInJson = await infoFromApi.json();

    result.innerHTML = `
    <p> Temperature in ${city} is ${infoFromApiInJson.current_weather.temperature}°C.   </p>` 
    windspeed.innerHTML = `<p> Windspeed: ${infoFromApiInJson.current_weather.windspeed} M/Sec. </p>`
    let temp = result.innerHTML;
    if (temp < 20) {
        
    }

}


