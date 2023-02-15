export const tempInfoCreate = (results,contentAppend) => {
    const tempInfo = document.createElement("div");

    tempInfo.innerHTML = `<div class="tempInfo-top-sec">
                            <img src="${results.current.condition.icon}" class="weather-icon">
                            <div class="tempInfo-top-info">
                                <p>${results.current.temp_c}°C</p>
                                <p>Feels like ${results.current.feelslike_c}°C</p>
                                <p>${results.current.condition.text}</p>
                            </div>
                        </div>
                        <div>
                            <p>Max Temperature: ${results.forecast.forecastday[0].day.maxtemp_c}°C</p>
                            <p>Min Temperature: ${results.forecast.forecastday[0].day.mintemp_c}°C</p>
                        </div>`;
    
    contentAppend.appendChild(tempInfo);
}