let cityPopulations = new Map();

cityPopulations.set("New York", 8419600);
cityPopulations.set("Los Angeles", 3998456);
cityPopulations.set("Chicago", 2716000);
cityPopulations.set("Houston", 2328000);
cityPopulations.set("Phoenix", 1680992);

const cityDataDiv = document.querySelector("#city-data");

function updateCityData() {
  cityDataDiv.textContent = "";
  cityPopulations.forEach((population, city) => {
    cityDataDiv.innerHTML += `<p>${city}: ${population} people</p>`;
  });
}

updateCityData();

function addCity() {
  const cityInput = document.querySelector("#city-input");
  const populationInput = document.querySelector("#population-input");

  const city = cityInput.value.trim();
  const population = parseInt(populationInput.value);

  if (city && !isNaN(population)) {
    cityPopulations.set(city, population);
    updateCityData();
    cityInput.value = "";
    populationInput.value = "";
  } else {
    alert("Please enter valid city name and population.");
  }
}

const addCityButton = document.querySelector("#add-city-button");

addCityButton.addEventListener("click", () => {
  addCity();
});
