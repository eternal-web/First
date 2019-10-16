'use strict';
let money = prompt("Ваш бюдшет на месяц?");
let time = prompt("Введите дату в формате", "YYYY-MM-DD");
let appData = {
    budget: money,
    express:{},
    optionalExpreses:{},
    income:[],
    timeData:time,
    savings: false
};
let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    a2 = prompt("Во сколько обойдется?", ''),
    a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    a4 = prompt("Во сколько обойдется?", '');

appData.express.a1 = a2;
appData.express.a3 = a4;

alert(appData.budget / 30);