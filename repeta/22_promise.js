// const fetchUser = userName => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = Math.random() > 0.3;

//       if (success) {
//         const user = { name: userName, age: 26, posts: 74 };
//         resolve(user);
//       }

//       const error = 'Произошла ошибка :(';
//       reject(error);
//     }, 1000);
//   });
// };

// fetchUser('Mango').then(onFetchUserSuccess).catch(onFetchUserError);

// function onFetchUserSuccess(user) {
//   console.log(user);
// }

// function onFetchUserError(error) {
//   console.log(`%c ${error}`, 'color:red; font-size: 18px');
// }

// Иподром..................................................................

const horses = [
  'Secretariat',
  'Eclipse',
  'West Australian',
  'Flying Fox',
  'Seabiscuit',
];

const getRandomTime = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const run = horse => {
  return new Promise(resolve => {
    const time = getRandomTime(2000, 5000);

    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
};

console.log(
  '%c Заезд начался, ставки не принимаются',
  'color:brown; font-size: 18px',
);

const promises = horses.map(run);

Promise.all(promises)
  .then(results => {
    console.log(
      '%c Заезд окончен, принимаются ставки',
      'color:blue; font-size: 18px',
    );
    console.table(results);
  })
  .catch(console.log);

Promise.race(promises).then(({ horse, time }) => {
  console.log(
    `%c Победил ${horse} финишировал за ${time} времени`,
    'color:blue; font-size: 18px',
  );
});
