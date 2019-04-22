console.log('You are at '+window.location);

const body = document.querySelector('body');
let quest = prompt('Какой будет фон у страницы?');

body.style.backgroundColor = quest;

let questText = prompt('Какого цвета будет текст?');
body.style.color = questText;

let questMan = prompt('Как зовут человека, который вас вдохновляет?');
const span = document.querySelector('span');
span.innerHTML = questMan;

const img = document.querySelector('img');
let imgQuest = prompt('Введите адресс картинки');
img.setAttribute ('src', 'imgQuest');

const bio = document.querySelector('.shortBio');
let bioQuest = prompt('Введите текст');
bio.innerHTML = bioQuest;

bio.className += ' animated';