export const tempInfoCreate = (results,contentAppend) => {
    const tempInfo = document.createElement("div");
    tempInfo.classList = "current-weather-data";

    const date = new Date();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[date.getDay()];

    tempInfo.innerHTML = `<div class="tempInfo-top-sec">
                            <img src="${results.current.condition.icon}" class="weather-icon">
                            <div class="tempInfo-top-info">
                                <p>${results.current.temp_c}°C</p>
                                <p>Feels like ${results.current.feelslike_c}°C</p>
                                <p>${results.current.condition.text}</p>
                            </div>
                        </div>
                        <div class="card-extra-info-grid">
                            <div>
                                <h3>Max</h3>
                                <p>${results.forecast.forecastday[0].day.maxtemp_c}°C</p>
                            </div>
                            <div>
                                <h3>Min</h3>
                                <p>${results.forecast.forecastday[0].day.mintemp_c}°C</p>
                            </div>
                           <div>
                                <h3>Wind</h3>
                                <p>${results.current.wind_kph}kph</p>
                           </div>
                           <div>
                                <h3>Humidity</h3>
                                <p>${results.current.humidity}%</p>
                           </div>
                           <div>
                                <h3>UV</h3>
                                <p>${results.current.uv}</p>
                           </div>
                        </div>`;
    
    contentAppend.appendChild(tempInfo);
}

export const currentDayHourlyData = (results,contentAppend) => {
    const currentDayForecast = results.forecast.forecastday[0];
    const currentDayHourlyData = currentDayForecast.hour;
    const currentTime = new Date();

    currentDayHourlyData.forEach((hour) =>{
        const timeWithoutDate = hour.time.split(' ')[1];
        const hourTime = new Date(hour.time);

        if(hourTime.getTime() >= currentTime.getTime()){
            contentAppend.innerHTML += `<div class="temp-time-data">
                                    <p>${timeWithoutDate}</p>
                                    <img src="${hour.condition.icon}" class="weather-icon">
                                    <p>${hour.temp_c}°C</p>
                                    <p>${hour.condition.text}</p>
                                    <p>${hour.precip_mm}mm</p>
                                    <p>${hour.chance_of_rain}%</p>
                                </div>`
        }
    });
};