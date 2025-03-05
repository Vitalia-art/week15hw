
const cities = ['Москва', 'Санкт-Петербург', 'Кишинев', 'Бельцы', 'Казань'];


let temperatures = [];


function getTemperature(city) {
    let temp = prompt(`Введите температуру в городе ${city}:`);
    return Number(temp);
}


cities.forEach(city => {
    let temp = getTemperature(city);
    temperatures.push(temp);
});


const cityList = document.getElementById('cityList');
cities.forEach((city, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${city}: ${temperatures[index]}°C`;
    cityList.appendChild(listItem);
});


let maxTemp = Math.max(...temperatures);
let minTemp = Math.min(...temperatures);


const maxTempElement = document.getElementById('maxTemp');
const minTempElement = document.getElementById('minTemp');
maxTempElement.textContent = `Максимальная температура: ${maxTemp}°C`;
minTempElement.textContent = `Минимальная температура: ${minTemp}°C`;
