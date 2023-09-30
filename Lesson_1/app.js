console.log("Hello World From JavaScript");

// setTimeout(() => {
//     document.body.style.backgroundColor = "green";
// }, 4000)

// let count = 0;

// setInterval(() => {

//     if(count % 2 === 0){
//         document.body.style.backgroundColor = "green";
//     }else{
//         document.body.style.backgroundColor = "orange";

//     }
//     count++;
// }, 200)

/*
JavaScript
V8 JavaScript Engine
Node.js
Electron.js
Cordova, React Native
*/

// Переменные

var balance = 5000;

console.log("Balance = ", balance);

// balance = -500.85;

balance = 2000;

// balance = 738249789237487238478923748972389478923774673274823789523987472389478937587348975894379872389748923784927384732974832789473287483278473287487328478237489732874872389478239748923784723847328473289**2;

console.log("Balance = ", balance + 3000);

// Типы данных Data types

//1) number числовой
//2) string текстовый, строковый
//3) boolean логический
//4) undefined неопределенный
//5) null нулевой, пустой
//6) object объект
//7) symbol
//8) bigint

var customerName = "Eugene";
var customerMiddleName = "Dmitrievich";

var customerINN = "1231356489";

var customerCardNumber = "4215 1564 1198 7897";

var customerSex = true; // true - мужской, false - женский

// true false

var isLegal = false;

var isResident = true;

var answer = 0; // 1 - Да, 0 - нет, -1 -сомневаюсь

// var customerMonthSalary = undefined;
var customerMonthSalary;

var isMeried = null;

var passport = {
    series: "ID",
    number: "01KG456ADE",
    issueDate: "01.01.2015",
    expiryDate: null,
    issueAuthority: "GUVD Bishkek",
    isUnlimited: true,
    documentNo(){
        return this.series + this.number;
    }
};



