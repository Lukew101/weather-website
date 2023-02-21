import { obtainDateAndTime } from "./components/liveDateTime.js";
import { tempInfoCreate } from "./components/currentDayData.js";
import  { message }  from "./components/errorMessage.js";

const infoContainer = document.querySelector(".infoContainer");
const countryCard = document.querySelector(".countryCard");
const inputBar = document.querySelector("#search");
const searchButton = document.querySelector("#search-button");
const form = document.querySelector("form");
const searchErrorMessage = document.querySelector(".search-error-message");

const countries = ['oslo', 'bergen', 'stavanger', 'trondheim', 'tromsø'];
const searchLocations = ['oslo', 'bergen', 'stavanger', 'trondheim', 'tromsø','jessheim', 'kristiansand', 'ålesund', 'lillehammer', 'hamar', 'arendal', 'fredrikstad', 'bodø']


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ad7286649fmsh265676bb30021c2p113f81jsn89bd39c53e1a',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

obtainDateAndTime();

async function APIFetch(){
    try{
        for(let i = 0; i < countries.length; i++){
            console.log(countries[i]);
            const country = countries[i];
            const response = await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${country}&days=1`, options);
            const results = await response.json();
            console.log(results);
            createCountryCards(results);
        };
    }
    catch(error){
        console.log({error});
        const errorMessage = error.message ? error.message : error;
        infoContainer.innerHTML = message("error", errorMessage);
    }
    
}
APIFetch();

function userSearchInput(){
    inputBar.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
          searchButton.click();
        }
      });
    
      form.addEventListener("submit", function(event) {
        event.preventDefault();
        const searchInput = inputBar.value.toLowerCase();
        const findLocation = searchLocations.find(function(placeLocation) {
          return placeLocation === searchInput;
        });
    
        if (findLocation) {
          location.href = `details.html?q=${findLocation}`;
        } else {
          searchErrorMessage.innerHTML = message("error", "Invalid input. Try again");
        }
    
        inputBar.value = "";
      });
}
// Make a search bar that drops down locations and that the user must click one
userSearchInput();



function createCountryCards(results){
    const pageDirect = document.createElement("a");
    const cardHeader = document.createElement("h2");

    pageDirect.setAttribute("href", `details.html?q=${results.location.name}`);

    cardHeader.innerHTML = `${results.location.name}`

    countryCard.appendChild(pageDirect);
    pageDirect.appendChild(cardHeader);
    tempInfoCreate(results, pageDirect);
}

// Maybe some news from Norway
// Interesting fact about that day
