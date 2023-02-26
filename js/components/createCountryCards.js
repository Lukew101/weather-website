import { tempInfoCreate } from "./currentDayData.js";

const countryCard = document.querySelector(".countryCard");

export function createCountryCards(results){
    const pageDirect = document.createElement("a");
    const cardHeader = document.createElement("h2");

    pageDirect.setAttribute("href", `details.html?q=${results.location.name}`);

    cardHeader.innerHTML = `${results.location.name}`

    countryCard.appendChild(pageDirect);
    pageDirect.appendChild(cardHeader);
    tempInfoCreate(results, pageDirect);
};