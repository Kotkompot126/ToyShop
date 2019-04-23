console.log('You are at '+window.location);

const body = document.querySelector('body');
let quest = prompt('Какой будет фон у страницы?');

body.style.backgroundColor = quest;

let questText = prompt('Какого цвета будет текст?');
body.style.color = questText;

let questMan = prompt('Как зовут человека, который вас вдохновляет?');
const span = document.querySelector('span');
span.innerHTML = questMan;

const image = document.querySelector('img');
let imgQuest = prompt('Введите адресс картинки');
console.log(imgQuest);
image.setAttribute ('src', 'img/one.jpg');

const bio = document.querySelector('.shortBio');
bio.className += ' animated';
let bioQuest = prompt('Введите текст');
bio.innerHTML = bioQuest;

