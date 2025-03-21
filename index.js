// const chislo = Math.floor(Math.random()*(15-3+1))+3;
//
// fizz = chislo/3;
// buzz = chislo/5;
//
// if (Number.isInteger(fizz)) {
//     console.log('Fizz');
// } else if (Number.isInteger(buzz)) {
//     console.log('Buzz');
// } else {
//     console.log('FizzBuzz');
// }

// const alex = {
//     name: 'Alex',
//     dateOfBirth: new Date('2024-05-15'),
// };
//
// const jake = {
//     name: 'Jake',
//     dateOfBirth: new Date('1970-01-01T00:00:00.000Z'),
// };
//
// const john = {
//     name: 'John',
//     dateOfBirth: new Date('2007-12-30T11:32:59.953+03:00'),
// };
//
// const bob = {
//     name: 'Bob',
//     dateOfBirth: new Date(),
// };
// const millisecondsInYear = 365 * 24 * 60 * 60 * 1000; // Или сразу просто 31536000000. Кол-во миллисекунд в году.
//
// // Текущая дата
// const now = new Date();
//
// // Делим "сколько прошло миллисекунд с момента рождения" на количество миллисекунд в годе, тем самым находим
// // сколько прошло лет с момента рождения. И округляем вниз, чтобы получить "полных лет"
// alex.age = Math.floor((now.getTime() - alex.dateOfBirth.getTime()) / millisecondsInYear);
// jake.age = Math.floor((now.getTime() - jake.dateOfBirth.getTime()) / millisecondsInYear);
// john.age = Math.floor((now.getTime() - john.dateOfBirth.getTime()) / millisecondsInYear);
// bob.age = Math.floor((now.getTime() - bob.dateOfBirth.getTime()) / millisecondsInYear);
//
// console.log(alex);
// console.log(jake);
// console.log(john);
// console.log(bob);
//
// const year = Math.floor(Math.random() * ((2120 - 1980) / 10 + 1)) * 10 + 1980;
// let vusYear = false;
// if (year % 4 === 0) {
//     if (year % 100 === 0) {
//         if (year % 400 === 0) {
//             vusYear = true;
//         }
//     } else {
//         vusYear = true;
//     }
// }
// console.log (year);
// console.log(vusYear ? "Это високосный год." : "Это не високосный год.");

// const array = [1, 33, -10, 'example', 'word'];
// console.log(array.join('_'));
//
// const user = {
//     name: 'Alex',
//     nickname: 'Alexxx675',
//     nicknameHistory: ['AlexLuk', 'Xela-123', 'Sasha 8'],
//    };
// user.nicknameHistory.push('Alexxx675');
// user.nickname = 'Denis';
// // console.log(user);
//
// const array1 = [null, undefined, '', '', NaN, 1, -16, true, false];
// const array2 = [];
//
// const ruslan = 'Ruslan-2';
// const age = 100;
// const array3 = [ruslan, array2, { length: 777 }, 'some string', -500 / 100, age * 10, [1], array1];
//
// const matrix = [ [1, 2, 3], [4, 5, 6], [7, 8, 9, 10] ];
//
// console.log('--- Группа 1 ---');
// console.log(array3[4] * array3[5]);
// console.log(array3[4], array3[6]);
// console.log([1, 2, 3][2]);
//
// console.log('--- Группа 2 ---');
// console.log(array3.length);
// console.log(array3[array3.length - 1].length);
// console.log(array3[2].length);
// console.log(array3[array3.length -1].length * array3[4] - array3[5] / ruslan.length);
// console.log((array3[7][6] + 6) * age - array2.length + array3[3].length * matrix[2][3]);
//
// console.log('--- Группа 3 ---');
// console.log([6, 3, 9][2]);
// console.log(matrix[1]);
// console.log(matrix[1][1]);
// console.log(matrix[0][0] * matrix[2][3]);
// console.log([ [8, 3], [2, 6] ][0][1]);
//
// console.log('--- Группа 4 ---');
// const m =[[[[777]], 555], 666];
// console.log(m[0][0][0][0]);
// console.log(m[1]);
// console.log(m[0][1]);
//
// let count = 0;
//
// while (true) {
//     let chislo1 = Math.floor(Math.random() * 6) + 1;
//     let chislo2 = Math.floor(Math.random() * 6) + 1;
//     count++;
//     console.log(`Попытка № ${count}, число ${chislo1}, число ${chislo2}`);
//     if (chislo1 === chislo2) {
//         break;
//     }
// }
// console.log(`Дубль выпал на попытке ${count}`);


const players = ['Alexey', 'Bob', 'Charlie', 'Dong', 'Emaar', 'Fox', 'Ginger', 'Hato']; // создаем массив

const variants = ['Орёл', 'Решка']; // создаем массив

const winners = [];// создаем пусстой массив
const losers = []; // создаем пусстой массив

while (players.length) {
    const player = players.pop();// удаляем последний элемент массива players
    const playerChoose = variants[Math.floor(Math.random() * variants.length)];// создаем рандомное целое число, чтобы выбрать элемент из массива variants

    const gameRandom = variants[Math.floor(Math.random() * variants.length)]; // создаем рандомное целое число, чтобы выбрать элемент из массива variants

    if (playerChoose === gameRandom) { // сравниваем два элемент из массива variants
        winners.push(player);// если условие выполняется, то добавляем элемeнт массива players в конец массива winners
    } else {
        losers.push(player); // если не условие выполняется, то добавляем элемент массива players в конец массива losers
    }
}

console.log(winners);
console.log(losers);
