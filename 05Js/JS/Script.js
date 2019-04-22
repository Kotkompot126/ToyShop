console.log('You are at '+window.location);
const colored = document.querySelector('.colored');
console.log(colored);
console.log(colored.style);

let quest = prompt('Какой ты хочешь цвет');
colored.style.backgroundColor = quest;