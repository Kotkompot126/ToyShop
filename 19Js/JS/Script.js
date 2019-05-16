const APIKey ='099715979800997fed902c8c415868c1';
const city = 'Москва';
const url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey;
let xhr = new XMLHttpRequest();
const form = document.forms[0];
const catRadio = document.querySelector('.catRadio');
const restRadio = document.querySelector('.restRadio');
const moneyRadio = document.querySelector('.moneyRadio');
class Person{
	constructor(name, hapiness) {
		this.name = name;
		this.hapiness = 0;
	}
	hasCat() {
		this.hapiness++;
		return this.hapiness;
		
	}
	hasRest() {
		return this.hapiness++;
		return this.hapiness;
	}
	hasMoney() {
		return this.hapiness++;
		return this.hapiness;
	}
	isSunny() {
	xhr.open('GET', url, false);
	xhr.send();
	if (xhr.status !=200) {
		console.log(xhr.status + '' + xhr.statusText);
	} else {
		var DATA = JSON.parse(xhr.responseText);
	}
	if (DATA.main.temp > 288) {
		this.hapiness++;
		return this.hapiness;
	} else {
		return this.hapiness;
	} 
	}
}







window.addEventListener('load', function(){
	form.onsubmit = function(e) {
		e.preventDefault();
		var InputName = form.elements.name.value;
		var Man = new Person(InputName);
		console.log(Man);
		Man.isSunny();
		if (catRadio.checked) {
			Man.hasCat();
		}
		if (restRadio.checked) {
			Man.hasRest();
		}
		if (moneyRadio.checked) {
			Man.hasMoney();
		}
		var personName = document.querySelector('.personName');
		var icon = document.querySelector('.icon');
		personName.innerHTML = InputName + ':';
		console.log(Man.hapiness);
		if (Man.hapiness ==4) {
			icon.innerHTML = '😁';
		} else if (Man.hapiness ==3 || Man.hapiness ==2) {
			icon.innerHTML = '😐';
		} else {
			icon.innerHTML = '☹️';
		}
	}
})