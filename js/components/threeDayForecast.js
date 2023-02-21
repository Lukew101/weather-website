import { getDayofDate } from "./currentDayOfDate.js";

export function threeDayForecast(results,contentAppend){
    for(let i = 1; i < results.forecast.forecastday.length; i++){
        
        let dayData = results.forecast.forecastday[i];

        const cardDate = document.createElement("h2");

        const forecastDates = `${results.forecast.forecastday[i].date}`;

        getDayofDate(forecastDates, cardDate, forecastDates);

        contentAppend.appendChild(cardDate);
        displayHourlyTemp(dayData.hour,contentAppend);
    }
}

function displayHourlyTemp(results,contentAppend){
    for(let i = 0; i < results.length; i++){

        const timeWithoutDate = results[i].time.split(' ')[1];
        const timeWithoutDateNumber = parseInt(timeWithoutDate);
        

        if(timeWithoutDateNumber % 2 === 0){
            contentAppend.innerHTML += `<div class="temp-time-data">
                                        <p>${timeWithoutDate}</p>
                                        <img src="${results[i].condition.icon}" class="weather-icon">
                                        <p>${results[i].condition.text}</p>
                                        <p>${results[i].temp_c}°C</p>
                                        <p>${results[i].precip_mm}mm</p>
                                        <p>${results[i].chance_of_rain}%</p>
                                    </div>`
        }
    }
}

// work on this