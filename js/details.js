import { tempInfoCreate } from "./components/tempInfoCreate.js";
import  { message }  from "./components/errorMessage.js";
import { threeDayForecast } from "./components/threeDayForecast.js";

const countryInfoContainer = document.querySelector(".countryInfoContainer");
const threeDayforecastContainer = document.querySelector(".three-day-forecast");

const locationString = document.location.search;

const params = new URLSearchParams(locationString);

const placeName = params.get("q");

const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${placeName}&days=3`;

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ad7286649fmsh265676bb30021c2p113f81jsn89bd39c53e1a',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

async function fetchLocation(){
    try {
        const response = await fetch(url, options);
        const results = await response.json();
        console.log(results);
        weatherData(results);
        threeDayForecast(results, threeDayforecastContainer);
    }
    catch(error) {
        const errorMessage = error.message ? error.message : error;
        countryInfoContainer.innerHTML = message("error", errorMessage);
    }
}
fetchLocation();


function weatherData(results){
    const titleHeader = document.createElement("h1");
    titleHeader.innerHTML = `${results.location.name}`;

    countryInfoContainer.appendChild(titleHeader);
    tempInfoCreate(results,countryInfoContainer);
};
// Have the same basic info as up top from tempInfoCreate. Underneath add the 10 day forecast etc