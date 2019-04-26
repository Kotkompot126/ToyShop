console.log('You are at '+window.location);

 let number = prompt('Введите число');

number = parseInt(number);
(number>=0) ? number = number : number = number*(-1);
console.log(number);


