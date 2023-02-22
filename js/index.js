import { obtainDateAndTime } from "./components/liveDateTime.js";
import { tempInfoCreate } from "./components/currentDayData.js";
import  { message }  from "./components/errorMessage.js";
import { userSearchInput } from "./components/userSearchInput.js";

const infoContainer = document.querySelector(".infoContainer");
const countryCard = document.querySelector(".countryCard");
const loader = document.querySelector(".loader");
const topPageInfo = document.querySelector(".top-info");

const countries = ['oslo', 'bergen', 'stavanger', 'trondheim', 'tromsø'];


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ad7286649fmsh265676bb30021c2p113f81jsn89bd39c53e1a',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

async function APIFetch(){
    try{
      await obtainDateAndTime();
        for(let i = 0; i < countries.length; i++){
            const country = countries[i];
            const response = await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${country}&days=1`, options);
            const results = await response.json();
            loader.style.display = "none";
            topPageInfo.style.display = "block";
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

