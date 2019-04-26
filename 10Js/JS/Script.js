console.log('You are at '+window.location);
let money = prompt('Сколько у вас денег?');
let apple = prompt('Сколько вы купили яблок?');
let bread = prompt('Сколько вы купили батонов хлеба?');
let appleMoney = apple * prompt('Сколько стоит одно яблоко?');
let breadMoney = bread * prompt('Сколько стоит один батон?');
alert(haveEnough(money, appleMoney, breadMoney));
function haveEnough(money, appleMoney, breadMoney) {
    let costs = appleMoney + breadMoney;
    return money >= costs ? "У вас достаточно денег" : "У вас недостаточно денег";
}