console.log('You are at '+window.location);

let crypto = [
  {
    name : "Bitcoin",
    price: 1388.37
  },
  {
    name : "Ethereum",
    price: 716
  },
  {
    name : "Litecoin",
    price: 140
  }
]
let BitcoinName = document.querySelector('.BitcoinName');
let EthereumName = document.querySelector('.EthereumName');
let LitecoinName = document.querySelector('.LitecoinName');
let LitecoinCost = document.querySelector('.LitecoinCost');
let EthereumCost = document.querySelector('.EthereumCost');
let BitcoinCost = document.querySelector('.BitcoinCost');
let BitcoinScale = document.querySelector('.BitcoinScale');
let EthereumScale = document.querySelector('.EthereumScale');
let LitecoinScale = document.querySelector('.LitecoinScale');

BitcoinName.innerHTML = crypto[0]['name'];
EthereumName.innerHTML = crypto[1]['name'];
LitecoinName.innerHTML = crypto[2]['name'];
BitcoinCost.innerHTML = crypto[0]['price'];
EthereumCost.innerHTML = crypto[1]['price'];
LitecoinCost.innerHTML = crypto[2]['price'];

let a = crypto[2]['price'];
let b = crypto[1]['price'];
let c = crypto[0]['price'];

BitcoinScale.style.width = c*1.2 + 'px';
EthereumScale.style.width = b*1.2 + 'px';
LitecoinScale.style.width = a*1.2 + 'px';
