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
let BitcoinName = document.querySelector('.BitcoinName')
let EthereumName = document.querySelector('.EthereumName')
let LitecoinName = document.querySelector('.LitecoinName')
let LitecoinCost = document.querySelector('.LitecoinCost')
let EthereumCost = document.querySelector('.EthereumCost')
let BitcoinCost = document.querySelector('.BitcoinCost')
let BitcoinScale = document.querySelector('.BitcoinScale')
let EthereumScale = document.querySelector('.EthereumScale')
let LitecoinScale = document.querySelector('.LitecoinScale')
let bitScale = (crypto[0]['price'])*0.5;

BitcoinName.innerHTML = crypto[0]['name'];
EthereumName.innerHTML = crypto[1]['name'];
LitecoinName.innerHTML = crypto[2]['name'];
BitcoinCost.innerHTML = crypto[0]['price'];
EthereumCost.innerHTML = crypto[1]['price'];
LitecoinCost.innerHTML = crypto[2]['price'];
BitcoinScale.style.width = 'bitScale' + 'px';