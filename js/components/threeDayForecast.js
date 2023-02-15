export function threeDayForecast(results,contentAppend){
    for(let i = 0; i < results.forecast.forecastday.length; i++){
        let dayData = results.forecast.forecastday[i];

        displayHourlyTemp(dayData.hour);

        const cardDate = document.createElement("h2");
        const tempEachHour = document.createElement("p");
        
        cardDate.innerHTML = `${results.forecast.forecastday[i].date}`;
        tempEachHour.innerHTML = `${dayData.hour.temp_c}`

        contentAppend.appendChild(cardDate);
        contentAppend.appendChild(tempEachHour);
    }
}

function displayHourlyTemp(results){
    for(let i = 0; i < results.length; i++){
        let results = results[i];
    }
}