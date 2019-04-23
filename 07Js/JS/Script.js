console.log('You are at '+window.location);

 let number = prompt('Введите число');

number = parseInt(number);
if (number>=0) {
	console.log(number);
} else if (number<0) {
number = number*(-1);
console.log(number);
}

