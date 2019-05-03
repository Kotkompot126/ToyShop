console.log('You are at '+window.location);

const total = document.querySelector('.total');
const form = document.forms[0];

form.onsubmit = function(e) {
	e.preventDefault();
	total.innerHTML = Math.sin(form.elements.number.value);
}