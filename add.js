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
//  for ( let i = 0; i < 2; i++) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');
//         if(typeof(a) === 'string' && typeof(a) != null && typeof(b) != null 
//         && a !='' && b !='' && a.length < 50)
// //  нам нужно оберечь себя от тог что пользлователь может нажать отмену для этого пишем условие
// //  в условии мы обозначили что тип а должен быть строкой хоть в промпт он почти всегда строка
// // затем мы после оператора "и" написали второе условие где тип а не равен "нал" ведь отмена єто как раз "нал"
// // после мі сравнили так и б потом прописали что а не равняется пустой строке как и б и затем что а содержит не более 50 символов
//         {
//             console.log("done");
//             appData.express[a] = b;
//         } else{
//             console.log("not resault");
//             --i;
//         }
        
//  }; 

//  я должен переписать этот цыкл двумя другими способами начнем с while
// let i = 0;
// while (i < 2) {
//     i++;
//     let a = prompt("Введите обязательную статью расходов в этом месяце", '');
//     let b = prompt("Во сколько обойдется?", '');
    
//     if(typeof(a) === 'string' && typeof(a) !=null && typeof(b) !=null
//     && a!='' && b !='' && a.length < 50 ){
//         console.log('done');
//         appData.express[a] = b;
// }   else{
//     console.log("not resault")
//     --i;
// }
// };
// Теперь вариант do while
let i = 0;
do {
    
    let a = prompt("Введите обязательную статью расходов в этом месяце", '');
    let b = prompt("Во сколько обойдется?", '');
    if(typeof(a) === 'string' && typeof(a) !=null && typeof(b) !=null
    && a!='' && b !='' && a.length < 50 ){
       i++;
       console.log('done');
       appData.express[a] = b;
       
}   else{
   console.log("not resault")
   --i;
}

   
           
}
while (i < 2) {
    
} 

 appData.moneyPerDay = appData.budget / 30;
// Мы создали новое свойство для обьекта в который поместили выражение которое делат месячный бюджет который ввел пользователь на 30 дней
alert("Ваш ежедневный бюджет =" + appData.moneyPerDay);
if(appData.moneyPerDay < 100){
    console.log("Низкий уровень достатка");
} else if(appData.moneyPerDay >= 100 && appData.moneyPerDay < 1000){
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay >= 1000){
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}