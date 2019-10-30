"use strict"
let btn = document.getElementById('start'),

budget = document.getElementsByClassName('budget-value')[0],
dayBudget = document.getElementsByClassName('daybudget-value')[0],
level = document.getElementsByClassName('level-value')[0],
expenses = document.getElementsByClassName('expenses-value')[0],
optionalExpenses = document.getElementsByClassName('optinionalexpenses-value')[0],
income = document.getElementsByClassName('income-value')[0],
monthSavings = document.getElementsByClassName('monthsavings-value')[0],
yearSavings = document.getElementsByClassName('yearsavings-value')[0],


optionalExpensesBtn = document.getElementsByTagName('button')[0],
expensesBtn = document.getElementsByTagName('button')[1],
countBtn = document.getElementsByTagName('button')[2],

expensesItem = document.getElementsByClassName('expenses-item'),
optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),

chooseIncome = document.querySelector('.choose-income'),
savigns = document.querySelector('#savings'),
chooseSum = document.querySelector('.choose-sum'),
percent = document.querySelector('.choose-sum'),
yaerValue = document.querySelector('.choose-sum'),
monthValue = document.querySelector('.month-value'),
dayValue = document.querySelector('.day-value');

console.log(btn);
console.log(budget);
console.log(dayBudget);
console.log(level);
console.log(expenses);
console.log(optionalExpenses);
console.log(income);
console.log(monthSavings);
console.log(yearSavings);
console.log(expensesItem);
console.log(optionalExpensesBtn);
console.log(expensesBtn);
console.log( countBtn );
console.log(optionalExpensesItem);
console.log( chooseIncome);
console.log(savigns);
console.log(chooseSum);
console.log(percent);
console.log(yaerValue );
console.log(monthValue);
console.log(dayValue);



let money, time;
function start (){
     money = +prompt("Ваш бюджет на месяц?");
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
    savings: true,
    chooseExpenses: function(){
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
    } 
    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        // Мы создали новое свойство для обьекта в который поместили выражение которое делат месячный бюджет который ввел пользователь на 30 дней
        // после этого мы заключили его в скобки для того чтоб применить к нему свойство туфиксет которое позволит нам его оруглить до столько цыфр после запятой сколько мы введем в скобках
        alert("Ваш ежедневный бюджет =" + appData.moneyPerDay);
    },
    detectLevel: function (){
        if(appData.moneyPerDay < 100){
            console.log("Низкий уровень достатка");
        } else if(appData.moneyPerDay >= 100 && appData.moneyPerDay < 1000){
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay >= 1000){
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function(){
        if(appData.savings === true){
            let save = +prompt("Сумма вашего депозита"),
            persent = +prompt("Под какой процент?");
            appData.monthIncome = (save / 100 / 12 * persent).toFixed(1);
            alert("Доход в месяц в вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function(){
        for(let i = 0; i<3; i++){
       
            let  questionOptExpenses = prompt('Статья необязательных расходов?');
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
          }
    },
    // arr.forEach(function(item, i, mass){
//     console.log(i + " :" + item + '(масив: ' + mass + ')');
// });
// Внутри метода фоич для функции мы можем задать 3 значения: item- это каждый элемент массива. i- Это номер элемента  mass- имя функции(Любое имя)
// если нам в работе нужны только аргументы тогда остальные 2 значения можно не писать если и номер аргумента задаем 2 значения
//  в результате мы получим 
// 0 :first(масив: first,2,3,four,5)
// add.js:54 1 :2(масив: first,2,3,four,5)
// add.js:54 2 :3(масив: first,2,3,four,5)
// add.js:54 3 :four(масив: first,2,3,four,5)
// add.js:54 4 :5(масив: first,2,3,four,5)
// add.js:59 (5) ["first", 2, 3, "four", 5]

// console.log(arr);
    chooseIncome: function(){
        let items = prompt('Что принесет дополнительный доход? {Перечислите через запятую}', '');
        if(typeof(items) !='string'|| typeof(items) ==null || items ==''){
            console.log('Вы ввели не корректное значение, либо не ввели его вовсе');
        } else {
            appData.income = items.split(', ');
            // Теперь все что мы получим от пользователя перейдет в наш массив данных
            appData.income.push(prompt('Может что-то еще?'));
            appData.income.sort();
            // Здесь мы сделали следующее пушем мы добавиили еще один вопрос ответ на который станет на последний индекс в массиве
            //  так как метод пуш добавляет свойство в конец
            // и сорт нам все это средактирует по алфовиту
        }
       
    }
   
};
appData.income.forEach (function (itemmassive, i) {
    alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
});


for (let key in appData) {
    console.log(' наша программа включает в себя данные:' +  key + "-" + options[key])
};