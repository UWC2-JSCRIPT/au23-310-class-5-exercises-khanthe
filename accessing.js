// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
let weatherHead = 
document.querySelector('#weather-head');
weatherHead.innerHTML = 'February 10 Weather Forecast, Seattle';

// Change the styling of every element with class "sun" to set the color to "orange"
let suns = document.querySelectorAll('.sun');
suns.forEach(function(sun){
    sun.style.color = 'orange';
});

// Change the class of the second <li> from to "sun" to "cloudy"
let listItems = document.querySelectorAll('#weather li');
listItems[1].className = 'cloudy';
