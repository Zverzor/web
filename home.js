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

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function (plan) {
        let str = `Мне ${plan['age']} и я владею языками:`;
        for (let key in plan['skills']['languages']) {
            str += ` ${plan['skills']['languages'][key].toUpperCase()}`
        }
        return str;
    }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showExperience(plan) {
    return plan['skills']['exp'];
}

function showProgrammingLangs(plan) {
    let lang = plan['skills']['programmingLangs'];
    let str = '';
    for (let key in lang) {
        str += `Язык ${key} изучен на ${lang[key]}\n`
    }
    return str;
}

console.log(showProgrammingLangs(personalPlanPeter));