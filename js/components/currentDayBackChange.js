export function changeCurrentDayBackground(background,results){
    if(results === "Clear" || results === "Sunny"){
        background.style.backgroundImage = "url(/images/clear-day.jpg)";
    } else if (results === "Light snow" || results === "Snow" || results === "Blizzard" || results === "Heavy snow"){
        background.style.backgroundImage = "url(/images/snow.jpg)";
    } else if(results === "Light rain" || results === "Rain" || results === "Moderate or heavy rain shower"){
        background.style.backgroundImage = "url(/images/rain.jpg)";
    } else if(results === "Overcast"){
        background.style.backgroundImage = "url(/images/overcast.jpg)";
    } else if(results === "Cloudy"){
        background.style.backgroundImage = "url(/images/cloudy.jpg)";
    } else if(results === "Partly cloudy"){
        background.style.backgroundImage = "url(/images/partly-cloudy.jpg)";
    } else {
        background.style.backgroundImage = "url(/images/normal-background.jpg)";
    }
}