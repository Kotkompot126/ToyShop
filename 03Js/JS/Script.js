console.log('You are at '+window.location);
let money = prompt('Сколько у вас денег?');
let apple = prompt('Сколько вы купили яблок?');
let bread = prompt('Сколько вы купили батонов хлеба?');
let appleMoney = apple * prompt('Сколько стоит одно яблоко?');
let breadMoney = bread * prompt('Сколько стоит один батон?');
let comparison = money >= (appleMoney+breadMoney);
document.body.innerHTML = comparison;