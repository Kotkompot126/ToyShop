const button = document.querySelector('.request')
const popup = document.querySelector('.popup')
const buttonclose = document.querySelector('.closePopup')
const openMenu = document.querySelector('.openMenu')
const menu = document.querySelector('.menu')
const page = document.querySelector('.page')
let state = 'none'
const layout = document.querySelector('.layout')
button.addEventListener('click', function() {
	popup.style.display = 'flex';
})
buttonclose.addEventListener('click', function(){
	popup.style.display = 'none';
})
	page.addEventListener('keydown', function(event){
		if (event.keyCode == 27)
      popup.style.display = 'none';
  });
	
openMenu.addEventListener('click', function(){
	if (state =='none') {
	menu.style.left = '0';
	openMenu.classList.toggle("is-active");
	state = 'block';
	} else {
		menu.style.left = '-50vw';
		state = 'none'
		openMenu.classList.toggle("is-active");
	}
})
layout.addEventListener('click', function(){
		popup.style.display = 'none';
})