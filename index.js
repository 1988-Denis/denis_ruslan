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

//
// const players = ['Alexey', 'Bob', 'Charlie', 'Dong', 'Emaar', 'Fox', 'Ginger', 'Hato']; // создаем массив
//
// const variants = ['Орёл', 'Решка']; // создаем массив
//
// const winners = [];// создаем пусстой массив
// const losers = []; // создаем пусстой массив
//
// while (players.length) {
//     const player = players.pop();// удаляем последний элемент массива players
//     const playerChoose = variants[Math.floor(Math.random() * variants.length)];// создаем рандомное целое число, чтобы выбрать элемент из массива variants
//
//     const gameRandom = variants[Math.floor(Math.random() * variants.length)]; // создаем рандомное целое число, чтобы выбрать элемент из массива variants
//
//     if (playerChoose === gameRandom) { // сравниваем два элемент из массива variants
//         winners.push(player);// если условие выполняется, то добавляем элемeнт массива players в конец массива winners
//     } else {
//         losers.push(player); // если не условие выполняется, то добавляем элемент массива players в конец массива losers
//     }
// }
//
// console.log(winners);
// console.log(losers);

// const numbers = [1, 22, -2, 3, -4, -65, 5, -6];
// let positiveCount = 0;
// let negativeCount = 0;
//
// for (let i = 0; i < numbers.length; i++) {
//        if (i === numbers.length - 2) {
//         continue;
//     }
//     if (numbers[i] > 0) {
//         positiveCount++;
//     } else if (numbers[i] < 0) {
//         negativeCount++;
//     }
// }
// console.log(`Положительных чисел: ${positiveCount}`);
// console.log(`Отрицательных чисел: ${negativeCount}`);

// const numbers = [1.1 , 2.2, -2, 3.3, -1, 5.5, 5.99, 7.49, 7.9999, -2.2];
// const plusIndex = [];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers [i]) {
//         plusIndex.push(i);
//     }
// }
// const endIndex = Math.max(0,plusIndex.length -4);
// // console.log(plusIndex);
//
// for (let i=0; i < endIndex; i++) {
//     const index = plusIndex[i];
//     numbers[index] = Math.round(numbers[index]);
// }
// console.log(numbers);

// const num = [3,5,7,9,0,1,2,4,5];
// const numIndex = Math.floor(num.length / 2);
// // console.log(numIndex);
// for (let i = numIndex; i < num.length; i++) {
//     console.log(num[i]);
// }

// Ёлочка
// const height = 5;
//
// for (let i = 0; i < height; i++) {
//     let stars = ' *'.repeat(height+i-4);
//
//     console.log(stars);
// }

// const matrix = [
//     ['Id', 'Title', 'Description'],
//     [1, 'Title-1', 'Description-1'],
//     [2, 'Title-2', 'Description-2'],
//     [3, 'Title-3', 'Description-3', 'Поле с багом'],
//     [4, 'Title-4', 'Description-4'],
//     [5, 'Title-5', 'Description-5'],
//     [6, 'Title-6', 'Description-6', 'Поле с багом'],
// ];
// const rezult = matrix.filter(item => item !== ',');
// // console.log(rezult);
// for (let i = 0; i < rezult.length; i++) {
//     let row = rezult[i] +' \t';
//     console.log(row);
//
// }
//
// const numbers = [9,-3546,5786774,34555,-1567,423];
// let min = numbers[0];
// let max = numbers[0];
// let srsum = 0;
//
// for (const number of numbers) {
//     if (number < min) {
//         min = number;
//     }
//     if (number > max) {
//         max = number;
//     }
//     srsum += number;
// }
// const average = srsum / numbers.length;
//
// console.log(`Минимальное число: ${min}`);
// console.log(`Максимальное число: ${max}`);
// console.log(`Среднее число: ${average}`);


// const vowels = ["а", "у", "о", "ы", "и", "э", "я", "ю", "ё", "е"];
// const vowels2 = vowels.join("");
// let glassn = 0;
// let neglasn = 0;
//
// for (const letter of vowels2) {
//     if (vowels2.includes(letter)) {
//         glassn++;
//     }else if (/[а-яё]/.test(letter)){
//         neglasn++;
//
//     }
//
// }
// console.log(glassn);
// // console.log(neglasn);
//
// // Сравнение массивов
//
// const names1 = ['Ivan', 'Kovan'];
// const names2 = ['Kovan', 'Ivan'];
// // // true, так как значения "одинаковые"
// //
// // let itog = true;
// //
// if (names1.length !== names2.length) {
//     itog = false;
// } else {
//     for (const item1    of names1) {
//         if (!names2.includes(item1)) {
//             itog = false;
//             break
//         }
//
//     }
// }
// console.log(itog);

// const names3 = ['A'];
// const names4 = ['A', 'B'];
// // false, так как элемент B есть в names4, но нет в names3
// let itog2 = true;
//
// if (names3.length !== names4.length) {
//     itog2 = false;
// } else {
//     for (const item1    of names3) {
//         if (!names4.includes(item1)) {
//             itog2 = false;
//             break
//         }
//
//     }
// }
// console.log(itog2);


// const names5 = ['C', 1, false];
// const names6 = [false, 1, 'C'];
// // true, так как одни и те же элементы
//
// // false, так как элемент B есть в names4, но нет в names3
// let itog3 = true;
//
// if (names5.length !== names6.length) {
//     itog3 = false;
// } else {
//     for (const item1    of names6) {
//         if (!names5.includes(item1)) {
//             itog3 = false;
//             break
//         }
//
//     }
// }
// console.log(itog3);


// const names7 = [null, 0, 'D'];
// const names8 = ['D', null];
// // // false, в names7 есть 0, но нет в names8
// //
// let itog4 = true;
//
// if (names7.length !== names8.length) {
//     itog4 = false;
// } else {
//     for (const item1    of names8) {
//         if (!names7.includes(item1)) {
//             itog4 = false;
//             break
//         }
//
//     }
// }
// console.log(itog4);



// const names9 = [];
// const names10 = [];
// // // true, оба массива пустые
// //
//
// let itog5 = true;
//
// if (names9.length !== names10.length) {
//     itog5 = false;
// } else {
//     for (const item1    of names10) {
//         if (!names9.includes(item1)) {
//             itog5 = false;
//             break
//         }
//
//     }
// }
// // console.log(itog5);
//
//
// const names11 = ['0'];
// const names12 = [0];
// // false
//
// let itog6 = true;
//
// if (names11.length !== names12.length) {
//     itog6 = false;
// } else {
//     for (const item1    of names12) {
//         if (!names11.includes(item1)) {
//             itog6 = false;
//             break
//         }
//
//     }
// }
// console.log(itog6);

const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'Diana', age: 35 },
    { name: 'Eve', age: 30 },
    { name: 'Frank', age: 28 },
    { name: 'Grace', age: 25 },
    { name: 'Hannah', age: 41 },
    { name: 'Ivy', age: 30 },
    { name: 'Jack', age: 28 },
];

const counter = {};
for (const user  of users) {
    if (counter[user.age]) {
        counter[user.age]++;

    } else {
        counter[user.age] = 1;
    }

}
for (const age in counter) {
    console.log (`Возраст = ${age}. 'Количество людей = ${counter[age]}`);
}