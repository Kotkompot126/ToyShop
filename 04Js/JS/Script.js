console.log('You are at '+window.location);

const byTag = document.getElementsByTagName('div');
const byClass = document.getElementsByClassName('class');
const byId = document.getElementById('id');
console.log(byTag, byClass, byId);

const allBySelector = document.querySelectorAll('.one.two');
const firstBySelector = document.querySelector('div');
console.log(allBySelector, firstBySelector);

const quest = prompt('Что хотите написать');
byId.innerHTML = quest;
firstBySelector.innerHTML = "<h2>Hello</h2>";