import { message } from "./errorMessage.js";

const inputBar = document.querySelector("#search");
const searchButton = document.querySelector("#search-button");
const form = document.querySelector("form");
const searchErrorMessage = document.querySelector(".search-error-message");

const searchLocations = ['oslo', 'bergen', 'stavanger', 'trondheim', 'tromsø','jessheim', 'kristiansand', 'ålesund', 'lillehammer', 'hamar', 'arendal', 'fredrikstad', 'bodø', 'narvik', 'sandefjord', 'harstad', 'larvik'];


export function userSearchInput(){
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
          searchErrorMessage.innerHTML = message("not-found-alert", "Location not found. Try another");
      }
      inputBar.value = "";
  });
};