'use strict';

function getCoupeNumber(a) {
    let result = (a / 4);

    if (typeof a != "number" && a < 0 && !Number.isInteger(a)) {
        result = 'Ошибка  Проверьте правильность введенного номера места'
    } else if (a == 0 || a > 36) {
        result = 'Таких мест в вагоне не существует'
    } else {
        result = Math.ceil(result)
    }

    return result;
}

console.log(getCoupeNumber(-23));


// let s = (a * a) * 6;
// let v = a * a * a;

// let result = '';
// if (typeof a === 'number' && a % 1 === 0 && a > 0) {
//     result = `Объем куба: ${v}, площадь всей поверхности: ${s}`;
// } else {
//     result = 'При вычислении произошла ошибка';
// }

// return result;