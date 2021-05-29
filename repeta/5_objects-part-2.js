//
// SPREAD & REST
//

const temperatures = [18, 14, 12, 21, 17, 29];

console.log(Math.min(...[18, 14, 12, 21, 17, 29]));

// const nextTemps = temperatures.concat([1, 2, 3]);
const nextTemps = [...temperatures, 1, 2, 3];
// console.log(nextTemps);

const lastWeekTemps = [1, 2, 3];
const currentTemps = [6, 1, 8];
const nextWeekTemps = [12, 14, 8];

// const temps = lastWeekTemps.concat(currentTemps, nextWeekTemps);
const temps = [
  ...lastWeekTemps,
  'xD',
  ...currentTemps,
  'hello',
  ...nextWeekTemps,
];
console.log(temps);

const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };

// const c = Object.assign({}, a, b, { z: 5, x: 8, g: 1 });

// const c = { t: 5, ...a, ...b, ...{ z: 5, x: 8, g: 1 }, x: 100 };

const c = { ...b, ...a, x: 100 };

console.log(c);

// слева всегда rest = справа всегда spread

//
// ДЕСТРУКТУРИЗАЦИЯ
//

const hotel = {
  name: 'Resort Hotel',
  stars: 5,
  capacity: 100,
};

// const { name = 'Julia', stars, capacity = 0 } = hotel;

// console.log(name);
// console.log(stars);
// console.log(capacity);

const showHotelInfo = function ({ name = 'Julia', stars, capacity = 0 }) {
  //   const { name = 'Julia', stars, capacity = 0 } = hotelInfo;

  console.log(name);
  console.log(stars);
  console.log(capacity);
};

showHotelInfo(hotel);

//
// Глубокая деструктуризация
//

const profile = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
  example: {
    a: {
      x: 1,
      y: 2,
    },
  },
};

const {
  name,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
  example: {
    a: { x, y },
  },
} = profile;

console.log(name, tag, location, avatar);
console.log(followers, views, likes);
console.log(x, y);

//
// ДЕСТРУКТУРИЗАЦИЯ МАССИВА
//

const rgb = [255, 100, 80];

const [red, green, blue] = rgb;

console.log(red, green, blue);

//
// REST В ДЕСТРУКТУРИЗАЦИИ
//

const profileTwo = {
  nameTwo: 'Jacques Gluke',
  tagTwo: 'jgluke',
  locationTwo: 'Ocho Rios, Jamaica',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const { nameTwo, tagTwo, locationTwo, ...restProps } = profileTwo;

console.log(nameTwo, tagTwo, locationTwo);
console.log(restProps);
console.log(profileTwo);

//
// REAL EXAMPLE
//

const profileThree = {
  nameThree: 'Jacques Gluke',
  tagThree: 'jgluke',
  locationThree: 'Ocho Rios, Jamaica',
  //   avatarThree: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  statsThree: {
    followersThree: 5603,
    viewsThree: 4827,
    likesThree: 1308,
  },
};

const makeProfileMarkup = function ({
  avatarThree = 'https://i.pravatar.cc/400?img=6',
  nameThree,
  tagThree,
  locationThree = 'Planet Earth',
  statsThree: { followersThree, viewsThree, likesThree },
}) {
  return `<div>
    <img src="${avatarThree}" alt="user avatar">
    <p>${nameThree}<span>@${tagThree}</span></p>
    <p>Location: ${locationThree}</p>
    <ul>
      <li>Followers: ${followersThree}</li>
      <li>Views: ${viewsThree}</li>
      <li>Likes: ${likesThree}</li>
    </ul>
  </div>`;
};

const markup = makeProfileMarkup(profileThree);
// console.log(markup);

document.body.insertAdjacentHTML('afterbegin', markup);
