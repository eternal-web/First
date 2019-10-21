'use strict';
let money, time;
function start (){
     money = +prompt("Ваш бюдшет на месяц?");
     time = prompt("Введите дату в формате", "YYYY-MM-DD");
     while(isNaN(money) || money =='' || money == null) {
        money = +prompt("Ваш бюдшет на месяц?");
        // isNaN проверяет что какой тип данных находится в данном случае проверяет если это буквы тогда возвращает тру если числа тогда фолсе
        // таким образом мы проверили правда ли что в строке есть цыфры или она пустая или нажали отмену если хоть что-то с этого тру
        // тогда цыкл запустится и будет повторять переменную мани пока не вернется фолсе во всех условиях
     }
}
start();

let appData = {
    budget: money,
    express:{},
    optionalExpenses:{},
    income:[],
    timeData:time,
    savings: true
};
function chooseExpenses() {
    for ( let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');
            if(typeof(a) === 'string' && typeof(a) != null && typeof(b) != null 
            && a !='' && b !='' && a.length < 50)
            //  нам нужно оберечь себя от тог что пользлователь может нажать отмену для этого пишем условие
//  в условии мы обозначили что тип а должен быть строкой хоть в промпт он почти всегда строка
// затем мы после оператора "и" написали второе условие где тип а не равен "нал" ведь отмена єто как раз "нал"
// после мі сравнили так и б потом прописали что а не равняется пустой строке как и б и затем что а содержит не более 50 символов
        {
            console.log("done");
            appData.express[a] = b;
        } else{
            console.log("not resault");
            --i;
        }
        
 }; 
}
chooseExpenses();


function detectDayBudget(){
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    // Мы создали новое свойство для обьекта в который поместили выражение которое делат месячный бюджет который ввел пользователь на 30 дней
    // после этого мы заключили его в скобки для того чтоб применить к нему свойство туфиксет которое позволит нам его оруглить до столько цыфр после запятой сколько мы введем в скобках
    alert("Ваш ежедневный бюджет =" + appData.moneyPerDay);
}
 function detectLevel() {
    if(appData.moneyPerDay < 100){
        console.log("Низкий уровень достатка");
    } else if(appData.moneyPerDay >= 100 && appData.moneyPerDay < 1000){
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay >= 1000){
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
 }

function checkSavings(){
    if(appData.savings === true){
        let save = +prompt("Сумма вашего депозита"),
        persent = +prompt("Под какой процент?");
        appData.monthIncome = (save / 100 / 12 * persent).toFixed(1);
        alert("Доход в месяц в вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();

function chooseOptExpenses(){
 
    for(let i = 0; i<3; i++){
       
      let  questionOptExpenses = prompt('Статья необязательных расходов?');
      appData.optionalExpenses[i] = questionOptExpenses;
      console.log(appData.optionalExpenses);
    }
   
}
chooseOptExpenses();