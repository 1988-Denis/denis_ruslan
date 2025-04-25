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
import { faker } from '@faker-js/faker';

const UserInfo = {
  // name: 'Stas',
  name: faker.person.firstName(),
  age: faker.number.octal({ min: 1, max: 99 }),
};
const StasAge = (arr: Array<{ name: string; age?: number | null }>): string | number => {
  for (const i in arr) {
    if (UserInfo.name === 'Stas') {
      return UserInfo.age == null ? 'Возраста нет' : arr[i].age!;
    }
  }
  return 'Объект не найден';
};
console.log('Данные запроса', UserInfo);
console.log('Результат поиска', StasAge);
