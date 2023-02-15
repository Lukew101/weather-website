import { tempInfoCreate } from "./components/tempInfoCreate.js";
import  { message }  from "./components/errorMessage.js";

const infoContainer = document.querySelector(".infoContainer");
const countryCard = document.querySelector(".countryCard");
const timeAndDate = document.querySelector(".time-date");

const countries = ['Oslo', 'Bergen', 'Stavanger', 'Trondheim'];


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ad7286649fmsh265676bb30021c2p113f81jsn89bd39c53e1a',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};


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

function createCountryCards(results){
    const pageDirect = document.createElement("a");
    const cardHeader = document.createElement("h2");
    // const weatherImage = document.createElement("i");

    pageDirect.setAttribute("href", `details.html?q=${results.location.name}`);

    cardHeader.innerHTML = `${results.location.name}`

    countryCard.appendChild(pageDirect);
    pageDirect.appendChild(cardHeader);
    tempInfoCreate(results, pageDirect);
}

// look at code on my GitHub
function obtainDateAndTime(){
    let today = new Date();
    let displayDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let displayTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    timeAndDate.innerHTML = `<h2>${displayDate}</h2>
                            <h2>${displayTime}</h2>`
}
obtainDateAndTime();


// Maybe some news from Norway
// Interesting fact about that day
