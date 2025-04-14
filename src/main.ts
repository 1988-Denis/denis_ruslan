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
//   info: ['secret', 'key'],
// };
//
// const a4: A = {
//   nick: '',
//   info: {},
// };

type A = {
  first: string;
  second: {
    third: string;
    fourth?: string;
    fifth: {
      sixth?: {
        tenth: {
          twelfth?: {
            thirteenth: {
              fifteenth: {
                sixteenth?: {
                  last: 'Достучались';
                };
              };
            };
            fourteenth: string;
          };
        };
        eleventh: string;
      };
      seventh: number;
      eight: string;
    };
  };
};

const a: A = {
  first: 'z',
  second: {
    third: 'f',
    fourth: 'a',
    fifth: {
      sixth: {
        tenth: {
          twelfth: {
            thirteenth: {
              fifteenth: {
                sixteenth: {
                  last: 'Достучались',
                },
              },
            },
            fourteenth: 's',
          },
        },
        eleventh: 'kk',
      },
      seventh: 8,
      eight: 'b',
    },
  },
};
console.log(
  a.second.fifth.sixth?.tenth.twelfth?.thirteenth.fifteenth.sixteenth?.last.toUpperCase(),
);
