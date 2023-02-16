export function threeDayForecast(results,contentAppend){
    for(let i = 0; i < results.forecast.forecastday.length; i++){
        let dayData = results.forecast.forecastday[i];

        const cardDate = document.createElement("h2");
        const tempEachHour = document.createElement("p");
        
        cardDate.innerHTML = `${results.forecast.forecastday[i].date}`;

        contentAppend.appendChild(cardDate);
        contentAppend.appendChild(tempEachHour);
        displayHourlyTemp(dayData.hour,contentAppend);
    }
}

function displayHourlyTemp(results,contentAppend){
    for(let i = 0; i < results.length; i++){
        console.log(results[i].temp_c);
        console.log(results[i].time);

        const hourlyTimeHeader = document.createElement("p");
        hourlyTimeHeader.innerHTML += results[i].time;

        contentAppend.appendChild(hourlyTimeHeader);

        const hourlyDegreeHeader = document.createElement("p");
        hourlyDegreeHeader.innerHTML += results[i].temp_c;

        contentAppend.appendChild(hourlyDegreeHeader);
    }
}

// work on this