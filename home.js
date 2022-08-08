'use strict';

// // // function getCoupeNumber(a) {
// // //     let result = (a / 4);

// // //     if (typeof a != "number" && a < 0 && !Number.isInteger(a)) {
// // //         result = 'Ошибка  Проверьте правильность введенного номера места'
// // //     } else if (a == 0 || a > 36) {
// // //         result = 'Таких мест в вагоне не существует'
// // //     } else {
// // //         result = Math.ceil(result)
// // //     }

// // //     return result;
// // // }

// // // console.log(getCoupeNumber(-23));


// // // let s = (a * a) * 6;
// // // let v = a * a * a;

// // // let result = '';
// // // if (typeof a === 'number' && a % 1 === 0 && a > 0) {
// // //     result = `Объем куба: ${v}, площадь всей поверхности: ${s}`;
// // // } else {
// // //     result = 'При вычислении произошла ошибка';
// // // }

// // // return result;

// // // function fib(num) {

// // //     let str = '';

// // //     for (let i = 0; i < num; i++) {
// // //         if (i <= 1) {
// // //             str += i + ' ';
// // //         } else if (i == 2) {
// // //             str += +str[0] + +str[2] + " ";
// // //         } else if (i >= 3) {
// // //             str += +str[i - 4] + +str[i - 2] + " ";
// // //             console.log(str[i - 3]);
// // //         }
// // //     }

// // //     return console.log(str);
// // // }

// // // fib(6);



// // function fib(num) {
// //     if (typeof (num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
// //         return "";
// //     }

// //     let result = '';
// //     let first = 0;
// //     let second = 1;

// //     for (let i = 0; i < num; i++) {
// //         if (i + 1 === num) {
// //             result += `${first}`;
// //             // Без пробела в конце
// //         } else {
// //             result += `${first} `;
// //         }

// //         let third = first + second;
// //         first = second;
// //         second = third;
// //     }

// //     return console.log(result);;
// // }

// // fib(7)

// // function getTimeFromMinutes(num) {

// //     let houre = Math.trunc(num / 60);
// //     let minute = Math.round(((num / 60) - Math.floor(num / 60)) * 60);
// //     let str = 'Это ';

// //     if (typeof num != "number" || num % 1 != 0 || num <= -1) {
// //         str = 'Ошибка провертье данные'
// //         return str;
// //     }

// //     if (houre == 1) {
// //         str += `${houre} час и ${minute} минут`
// //     } else if (houre >= 2 && houre < 5) {
// //         str += `${houre} часа и ${minute} минут`
// //     } else if (houre >= 5 || houre == 0) {
// //         str += `${houre} часов и ${minute} минут`
// //     }
// //     return str;

// // }

// // console.log(getTimeFromMinutes(150));

// function findMaxNumber(a, b, c, d) {
//     let num;
//     if (typeof a != 'number' || typeof b != 'number' || typeof c != 'number' || typeof d != 'number') {
//         num = 0;
//         return num;
//     }

//     if (a > b && a > c && a > d) {
//         num = a;
//     } else if (b > a && b > c && b > d) {
//         num = b;
//     } else if (c > a && c > b && c > d) {
//         num = c;
//     } else if (d > a && d > b && d > c) {
//         num = d;
//     }

//     return num;
// }

// console.log(findMaxNumber(1, 30, 3, 4));

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function (plan) {
//         let str = `Мне ${plan['age']} и я владею языками:`;
//         for (let key in plan['skills']['languages']) {
//             str += ` ${plan['skills']['languages'][key].toUpperCase()}`
//         }
//         return str;
//     }
// };

// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

// function showExperience(plan) {
//     return plan['skills']['exp'];
// }

// function showProgrammingLangs(plan) {
//     let lang = plan['skills']['programmingLangs'];
//     let str = '';
//     for (let key in lang) {
//         str += `Язык ${key} изучен на ${lang[key]}\n`
//     }
//     return str;
// }

// console.log(showProgrammingLangs(personalPlanPeter));

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let str = 'Семья состоит из: ';

//     if (arr.length == 0) {
//         str = 'Семья пуста';
//     } else {
//         for (let key in arr) {
//             str += arr[key] + ' ';
//         }
//     }

//     return str;
// }

// console.log(showFamily(family));

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     for (let key in arr) {
//         console.log(arr[key].toLowerCase());

//     }
// }

// standardizeStrings(favoriteCities);

// const someString = 'This is some strange string';

// function reverse(str) {
//     if(typeof str != 'string') {
//         return 'Ошибка!';
//     } else {
//         return str.split('').reverse().join('');
//     }
// }

// console.log(reverse(someString));

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//     let current = [...baseCurrencies, ...additionalCurrencies];
//     let str = 'Доступные валюты:\n';
//     if (current.length == 0) {
//         str = 'Нет доступных валют\n';
//     }

//     for (let key in current) {
//         if (current[key] == missingCurr) {
//             continue;
//         } else {
//             str += current[key] + '\n';
//         }

//     }
//     return str;
// }

// console.log(availableCurr(baseCurrencies));

// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// }

// function isBudgetEnough(data) {
//     let square = 0;
//     let volume = 0;

//     data.shops.forEach(shop => {
//         square += shop.width * shop.length;
//     });

//     volume = data.height * square;


//     if (data.budget - (volume * data.moneyPer1m3) >= 0) {
//         return 'Бюджета достаточно';
//     } else {
//         return 'Бюджета недостаточно';
//     }

    
// }

// console.log(isBudgetEnough(shoppingMallData));

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// function sortStudentsByGroups(arr) {
//     arr.sort();
//     const a = [], b = [], c = [], rest = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (i < 3) {
//             a.push(arr[i]);
            
//         } else if (i < 6) {
//             b.push(arr[i]);
//         } else if (i < 9) {
//             c.push(arr[i]);
//         } else {
//             rest.push(arr[i]);
//         }
//     }
//     return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]
// }

// console.log(sortStudentsByGroups(students));

const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Открыто' : answer = 'Закрыто';

    return answer;
}

console.log(isOpen(restorantData.openNow))

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if ((+fDish.price.slice(0, 1) + +sDish.price.slice(0, 1)) < +average.slice(0, 2)) {
        return 'Цена выше средней';
    } else {
        return 'Цена ниже средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[1], restorantData.menu[3], restorantData.averageLunchPrice));
console.log(restorantData);
function transferWaitors(data) {
    const copy = Object.assign({}, data);

    copy.waitors = [{name: 'Mike', age: 32}];
    return copy;
}

console.log(transferWaitors(restorantData));