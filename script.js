'use strict'

const api = {
    key: "31dd9aed21c3b8725b66d73143230000",
    baseurl: "https://api.openweathermap.org/data/2.5/"
}

const searchBox = document.querySelector(".search-box")
searchBox.addEventListener("keypress", setQuery)
const main = document.querySelector("main")

function setQuery(event) {
    if(event.keyCode == 13)
    getResults(searchBox.value)
}

function clear() {
    searchBox.value = ""
}

function getResults(query) {
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((weather) => weather.json())
        .then(displayResults)
        clear();
        main.innerHTML = ""
}

function displayResults(weather) {
    const html = `
        <div class="city">${weather.name} ${weather.sys.country}</div>
        <div class="date">Saturday 12 February 2022</div>
        <div class="temp">${Math.round(weather.main.temp)} °C</div>
        <div class="weather">${weather.weather[0].main}</div>
        <div class="hi-low">${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C</div>
    `

    main.insertAdjacentHTML("beforeend", html)
}