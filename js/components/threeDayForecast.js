export function threeDayForecast(results,contentAppend){
    for(let i = 0; i < results.forecast.forecastday.length; i++){
        let dayData = results.forecast.forecastday[i];

        displayHourlyTemp(dayData.hour);

        const cardDate = document.createElement("h2");
        const tempEachHour = document.createElement("p");
        
        cardDate.innerHTML = `${results.forecast.forecastday[i].date}`;
        tempEachHour

        contentAppend.appendChild(cardDate);
    }
}

function displayHourlyTemp(results){
    for(let i = 0; i < results.length; i++){
        console.log(results[i].temp_c);
    }
}