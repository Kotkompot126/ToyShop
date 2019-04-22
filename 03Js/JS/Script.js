console.log('You are at '+window.location);
let money = prompt('Сколько у вас денег?');
let apple = prompt('Сколько вы купили яблок?');
let bread = prompt('Сколько вы купили батонов хлеба?');
let applemoney = apple * prompt('Сколько стоит одно яблоко?');
let breadmoney = bread * prompt('Сколько стоит один батон?');
let comparison = money >= (applemoney+breadmoney);
document.body.innerHTML = comparison;