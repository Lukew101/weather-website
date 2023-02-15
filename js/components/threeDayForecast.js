const threeDayforecastContainer = document.querySelector(".three-day-forecast");

function threeDayForecast(results,contentAppend){
    for(let i = 0; i < results.forecast.forecastday.length; i++){
        console.log(results.forecast.forecastday[i]);

        const date = document.createElement("h2");

        date.innerHTML = `${results.forecast.forecastday[i].date}`;
    }

    threeDayforecastContainer.appendChild(date);
}