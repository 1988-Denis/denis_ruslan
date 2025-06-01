// type A = {
//   age?: number | string;
//   nick: string;
//   info: number[] | { id: number } | string[] | {};
//   photo?: string | null;
// };
// const a1: A = {
//   age: 10,
//   nick: 'mynick',
//   info: [1, 100],
//   photo: 'string',
// };
//
// const a2: A = {
//   age: '10 years',
//   nick: '',
//   info: { id: 100 },
//   photo: null,
// };
//
// const a3: A = {
//   nick: '       ',
// //   info: ['secret', 'key'],
// // };
// //
// // const a4: A = {
// //   nick: '',
// //   info: {},
// // };
//
// type A = {
//   first: string;
//   second: {
//     third: string;
//     fourth?: string;
//     fifth: {
//       sixth?: {
//         tenth: {
//           twelfth?: {
//             thirteenth: {
//               fifteenth: {
//                 sixteenth?: {
//                   last: 'Достучались';
//                 };
//               };
//             };
//             fourteenth: string;
//           };
//         };
//         eleventh: string;
//       };
//       seventh: number;
//       eight: string;
//     };
//   };
// };
//
// const a: A = {
//   first: 'z',
//   second: {
//     third: 'f',
//     fourth: 'a',
//     fifth: {
//       sixth: {
//         tenth: {
//           twelfth: {
//             thirteenth: {
//               fifteenth: {
//                 sixteenth: {
//                   last: 'Достучались',
//                 },
//               },
//             },
//             fourteenth: 's',
//           },
//         },
//         eleventh: 'kk',
//       },
//       seventh: 8,
//       eight: 'b',
//     },
//   },
// };
// console.log(
// //   a.second.fifth.sixth?.tenth.twelfth?.thirteenth.fifteenth.sixteenth?.last.toUpperCase(),
// // );
// import chalk from 'chalk';
//
// console.log(chalk.red('красный !'));
// console.log(chalk.green.bold('Зеленый жирный'));
// console.log(chalk.blue.underline('Синий подчеркнутый'));
// console.log(chalk.bgYellow.black('Черный на желтом фоне'));

// import { blue, green, red } from 'chalk';
//
// const max = 10;
// const result = [];
// const colors = [red, green, blue];
//
// for (let i = 0; i < max; i++) {
//   const color = colors[i % 3];
//   result.push(color('*'));
// }
//
// console.log(result.join(' - '));
//
// type UserRole = 'manager' | 'PM' | 'boss';
// type Person = {
//   name: string;
//   email: string;
//   role: UserRole;
// };
// const person: Person = {
//   name: 'Viktor',
//   email: 'dgth',
//   role: 'PM',
// };
// person.role = 'PM';
//
// type Person1 = {
//   name: string;
//   role: 'manager' | 'PM' | 'boss';
// };
//
// type NumberPaty = 23 | 49 | 56;
// let paty: NumberPaty = 23;
// paty = 23;
// paty = 49;

// type UserRole = 'manager' | 'PM';
// type UserRole2 = 'GM' | 'GD';
//
// type Item = {
//   userRole: UserRole;
//   userRole2: UserRole2;
//   createdAt: Date;
//   createdAtISO: string;
// };
// const myItems: Item = {
//   userRole: 'PM',
//   userRole2: 'GM',
//   createdAt: new Date(),
//   createdAtISO: new Date().toISOString(),
// };
// console.log(myItems);
//
// import dayjs from 'dayjs';
//
// console.log(12, dayjs('2024-08-23T12:30:00Z').toISOString());
// console.log(2, dayjs('2024-08-23T15:30:00+03:00').toISOString());
// console.log(5, dayjs('2024-08-24T01:30:00+13:00').toISOString());
// console.log(9, dayjs('2024-08-23T09:30:00-03:00').toISOString());
// console.log('----\n');
//
// console.log(4, dayjs('2024-08-23T15:30:00Z').toISOString());
// console.log(6, dayjs('2024-08-23T17:30:00+02:00').toISOString());
// console.log(10, dayjs('2024-08-23T14:30:00-01:00').toISOString());
// console.log(8, dayjs('2024-08-23T03:30:00-12:00').toISOString());
// console.log('----\n');
//
// console.log(1, dayjs('2024-08-23T03:30:00-11:00').toISOString());
// console.log(3, dayjs('2024-08-23T14:30:00Z').toISOString());
// console.log(7, dayjs('2024-08-23T10:30:00-04:00').toISOString());
// console.log(11, dayjs('2024-08-24T02:30:00+12:00').toISOString());

// import chalk from 'chalk';
//
// enum Street {
//   Green = 'Green',
//   Lenina = 'Red',
//   Jykovan = 'Yellow',
// }
// const streets = Object.values(Street);
//
// console.log(chalk.green.bold(streets[0]), chalk.red.bold(streets[1]), chalk.yellow.bold(streets[2]));

// import { faker } from '@faker-js/faker';
// import chalk from 'chalk';
//
// const PM = {
//   email: faker.internet.email(),
//   adress: {
//     country: faker.location.country(),
//     city: faker.location.city(),
//   },
// };
// console.log(chalk.blue.bold('PM:'));
// console.log(
//   chalk.green('  email: ') + chalk.red(PM.email) + '\n' + chalk.green('  adress: ') + chalk.yellow(PM.adress),
// );
// import { faker } from '@faker-js/faker';
//
// enum color {
//   green = 'green',
//   yellow = 'yellow',
//   blue = 'blue',
// }
//
// type User = {
//   id: string;
//   name: string;
//   email: string;
//   favoriteColor: color;
// };
//
// const users: User[] = Array.from({ length: 5 }, () => ({
//   id: faker.string.uuid(),
//   name: faker.person.firstName(),
//   email: faker.internet.email(),
//   favoriteColor: faker.helpers.arrayElement(Object.values(color)),
// }));
//
// const randomColor = faker.helpers.arrayElement(Object.values(color));
//
// console.log(`Пользователи, которые любят ${randomColor}:`);
// if (randomColor.length === 0) {
//   console.log('Таких пользователей нет');
// } else {
// //   console.log(randomColor);
// // }
//
// type MyType = {
//   requiredField: string;
//   optionalField?: string | null;
// };
//
// // Создаем 4 объекта
// const obj1: MyType = {
//   requiredField: 'Обязательное поле 1',
//   // optionalField отсутствует
// };
//
// const obj2: MyType = {
//   requiredField: 'Обязательное поле 2',
//   optionalField: null,
// };
//
// const obj3: MyType = {
//   requiredField: 'Обязательное поле 3',
//   optionalField: '',
// };
//
// const obj4: MyType = {
//   requiredField: 'Обязательное поле 4',
//   optionalField: 'Hello, World!',
// };
//
// // Проверка для каждого объекта
// // Объект 1
// if (!('optionalField' in obj1) || obj1.optionalField === null) {
//   console.log('не обнаружено');
// } else if (obj1.optionalField === '') {
//   console.log('пусто');
// } else {
//   console.log(obj1.optionalField);
// }
//
// // Объект 2
// if (!('optionalField' in obj2) || obj2.optionalField === null) {
//   console.log('не обнаружено');
// } else if (obj2.optionalField === '') {
//   console.log('пусто');
// } else {
//   console.log(obj2.optionalField);
// }
//
// // Объект 3
// if (!('optionalField' in obj3) || obj3.optionalField === null) {
//   console.log('не обнаружено');
// } else if (obj3.optionalField === '') {
//   console.log('пусто');
// } else {
//   console.log(obj3.optionalField);
// }
//
// // Объект 4
// if (!('optionalField' in obj4) || obj4.optionalField === null) {
//   console.log('не обнаружено');
// } else if (obj4.optionalField === '') {
//   console.log('пусто');
// } else {
//   console.log(obj4.optionalField);
// // }
// function sumObject(obj) {
//   if (!obj || typeof obj !== 'object') return 0;
//   return Object.values(obj).reduce((sum, value) => sum + (Number(value) || 0), 0);
// }
// const sample = { a: 10, b: 20, c: 30 };
// console.log(sumObject(sample));
//
// import { faker } from '@faker-js/faker';
//
// // Определяем тип для пользователя
// type User = {
//   name: string;
//   age?: number | null;
// };
//
// // Функция для создания тестовых данных
// function createTestUsers(): User[] {
//   return [
//     { name: 'Anna', age: 25 },
//     { name: 'Stas', age: faker.number.int({ min: 18, max: 60 }) },
//     { name: 'Mike', age: null },
//     { name: 'Olga', age: undefined },
//     { name: 'Ivan' },
//   ];
// }
//
// // функция для поиска возраста Stas
// function findStasAge(users: User[]): string | number {
//   for (const user of users) {
//     if (user.name === 'Stas') {
//       if (user.age === null || user.age === undefined) {
//         return 'Возраста нет';
//       }
//       return user.age;
//     }
//   }
//   return 'Объект не найден';
// }
//
// // Тестирование функции
// const testUsers = createTestUsers();
// console.log('Тестовые данные:', testUsers);
// console.log('Результат поиска:', findStasAge(testUsers));

// const source = 'the quick brown fox jumps over the lazy dog';
// const custom = 'oak lgypb wited zts qgfch tuki oak mjrn xtv';
// const encoded = 'ntg ajuk fjbydv vikjo citvikhh yd mkjidydv qjujhpiyco. ptdvijoh!';
//
// // объект для замены символов/ fromEntries метод, который преобразует список пар «ключ — значение» в объект
// const decoder = Object.fromEntries([...source].map((char, i) => [custom[i], char]));
//
// // Декодируем текст
// const decoded = [...encoded].map((c) => decoder[c] || c).join('');
//
// console.log(decoded);

// type dayDa = () => dayjs;
//
// const today = (cdPast: dayDa, cbFuture: dayDa) => {
//   const now = new Date();
//   if (now) {
//     cdPast();
//   } else {
//     cbFuture();
//   }
// };
// const pastCallback = () => console.log('Это прошлое');
// const futureCallback = () => console.log('Это будущее');

// import { faker } from '@faker-js/faker';
//
// const generatePerson = () => ({
//   email: faker.internet.email(),
//   age: faker.number.int({ min: 1, max: 67 }),
//   address: {
//     country: faker.location.country(),
//     city: faker.location.city(),
//   },
// });
//
// const persons = Array.from({ length: 5 }, generatePerson);
//
// const adult = persons.find((person) => person.age >= 10);
// console.log(adult);
//
// const storage = [
//   { age: 10, name: 'first' },
//   { age: 20, name: 'second' },
//   { age: 30, name: 'third' },
//   { age: 40, name: 'fourth' },
// ];
//
// const smartSearch = (arr: any[], property: any, value: any) => {
//   return arr.find((item) => item[property] === value);
// };
//
// const person1 = smartSearch(storage, 'age', 30);
// console.log(person1); // { age: 30, name: 'third' }
//
// const person2 = smartSearch(storage, 'age', 10);
// console.log(person2); // { age: 10, name: 'first' }
//
// const person3 = smartSearch(storage, 'name', 'second');
// console.log(person3); // { age: 20, name: 'second' }

// import { faker } from '@faker-js/faker';
//
// const generatePerson = () => ({
//   email: faker.internet.email(),
//   age: faker.number.int({ min: 1, max: 67 }),
//   address: {
//     country: faker.location.country(),
//     city: faker.location.city(),
//   },
// });
//
// const persons = Array.from({ length: 5 }, generatePerson);
//
// const randomPersons = persons.filter(() => Math.random() > 0.5);
// console.log('Случайные  персоны:', randomPersons);
// type User = {
//   name: string;
//   age: number;
// };
//
// const users: User[] = [
//   { name: 'Пользователь-1', age: 1 },
//   { name: 'Пользователь-21', age: 21 },
//   { name: 'Пользователь-30', age: 30 },
//   { name: 'Пользователь-14', age: 14 },
//   { name: 'Пользователь-18', age: 18 },
//   { name: 'Пользователь--1', age: -1 },
//   { name: 'Пользователь-1', age: 1 },
// ];
// const old = users.filter((user) => user.age >= 18);
// console.log(old);
//
// import { green, red } from 'chalk';
//
// function isPalindrome(str: string): boolean {
//   return str === str.split('').reverse().join('');
// }
//
// const tests = [
//   ['топот', true],
//   ['пот', false],
//   ['потоп', true],
//   ['кабак', true],
//   ['(())', false],
//   ['табат', true],
//   ['abab', false],
//   ['топпот', true],
//   ['()()', false],
//   ['', true],
//   ['123321', true],
//   ['())(', true],
//   ['abba', true],
//   ['а роза упала на лапу азора', false], // Пробелы не совпадают!
// ] as const;
//
// for (const test of tests) {
//   const [word, expected] = test;
//
//   const result = isPalindrome(word);
//   if (result !== expected) {
//     console.log(red(`Для слова "${word}" тест не прошел. Ожидалось: ${expected} | Получено: ${result}`));
//     continue;
//   }
//
//   console.log(green(`Слово "${word}" успешно. Результат: ${result}`));
// }

// const storage = [
//   { age: 10, name: 'first' },
//   { age: 20, name: 'second' },
//   { age: 30, name: 'third' },
//   { age: 40, name: 'fourth' },
// ];
//
// const smalls = storage.map((s) => s.age > 20);
//
// console.log(smalls);

// const storage = [
//   { age: 10, name: 'first' },
//   { age: 20, name: 'second' },
//   { age: 30, name: 'third' },
//   { age: 40, name: 'fourth' },
// ];
//
// const storage2 = storage.map((item) => ({
//   age: item.name,
//   name: item.age,
//   reversed: true,
// }));
//
// console.log(storage2);

// Эта функция принимает значение и возвращает true/false
// const persons = [
//   { age: 10, name: 'Kostya' },
//   { age: 17, name: 'Kostya-2' },
//   { age: 30, name: 'Pavel' },
//   { age: 50, name: 'Pavel-2' },
// ];
//
// const adult = persons.find((person) => person.age >= 18);
// console.log(adult); // { age: 30, name: 'Pavel' }
//
// const old = persons.find((person) => person.age >= 100);
// console.log(old); // undefined

// const known = undefined;
// const email = '';
// const nick = 'nickname';
// const age = 0;
// const isReady = false;
// const size = 1;
// const photo = null;
//
// const where = {
//   ...(email ? { email } : { n: 1 }),
//   ...(nick ? { nick, n: 2 } : { g: 8 }),
//   ...(age ? { age } : { n: 3 }),
//   ...(isReady ? { isReady, n: 10 } : {}),
//   ...(size ? { size, n: 9 } : {}),
//   ...(known ? { known } : { x: 4 }),
//   ...(photo ? { photo } : { x: 5 }),
// };
//
// console.log(where);

const mergeToNewObject = (a: any, b: any) => {
  return { ...a, ...b };
};

const obj1 = { a: 10, b: 100, c: 1 };
const obj2 = { a: 20, b: 200, e: 2 };
const obj3 = mergeToNewObject(obj1, obj2);

console.log(obj1); // { a: 10, b: 100, c: 1 }
console.log(obj2); // { a: 20, b: 200, e: 2 }
console.log(obj3); // { a: 20, b: 200, c: 1, e: 2 }
