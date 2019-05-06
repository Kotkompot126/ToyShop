const form = document.forms[0];
const APIKey ='099715979800997fed902c8c415868c1' ;
const city = form.elements.text.value;
const url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey;
const temp = document.querySelector('.temp');
const speed = document.querySelector('.speed');
let xhr = new XMLHttpRequest();


xhr.open('GET', url, false);
xhr.send();

if (xhr.status !=200) {
	console.log(xhr.status + '' + xhr.statusText);
} else {
	let DATA = JSON.parse(xhr.responseText);
	console.log(DATA)
	document.write(DATA.main.temp-273 + ' °C');
	document.write(DATA.wind.speed + ' м/с');
}



form.onsubmit = function(e) {
	e.preventDefault();
	temp.innerHTML = DATA.main.temp-273 + ' °C';
	speed.innerHTML = DATA.wind.speed + ' м/с';
}