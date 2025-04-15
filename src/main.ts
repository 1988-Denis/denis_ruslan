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

type NumberPaty = 23 | 49 | 56;
let paty: NumberPaty = 23;
paty = 23;
paty = 49;
