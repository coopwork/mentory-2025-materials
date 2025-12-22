

// const user = {
//   name: 'my name',
//   getName1() {
//     console.log('Весь контекст this из функции getName1', this);
//     return this?.name
//   },
//   getName2: () => {
//     console.log('Весь контекст this из функции getName2', this);
//     return this?.name
//   },
//   getName3: function () {
//     console.log('Весь контекст this из функции getName3', this);
//     return this?.name
//   },

//   address: {
//     city: 'Los angeles',

//     getCity1() {
//       console.log('Весь контекст this из функции getCity1', this);
//       return this?.city
//     },
//     getCity2: () => {
//       console.log('Весь контекст this из функции getCity2', this);
//       return this?.city
//     },
//     getCity3: function () {
//       console.log('Весь контекст this из функции getCity3', this);
//       return this?.city
//     },
//   }
// }


// console.log('/////getName');
// console.log(user.getName1());
// console.log(user.getName2());
// console.log(user.getName3());


// console.log('');
// console.log('/////getCity');
// console.log(user.address.getCity1());
// console.log(user.address.getCity2());
// console.log(user.address.getCity3());



// const user = {
//   name: 'Alex',

//   address: {
//     city: 'Los Angeles',

//     getMe(myCar) {
//       console.log(myCar, this);
//     }
//   }
// };

// bind
// call
// apply

// user.address.getMe = user.address.getMe.bind(user)

// console.log(user.address.getMe.call(user, 'Kia'));


// const user1 = {
//   name: 'Alex 1',
//   address: {
//     city: 'Los Angeles',
//     country: 'USA',
//   }
// };

// const user2 = {
//   name: 'Alex 2',
//   address: {
//     city: 'Los Angeles',
//     country: 'USA',
//   }
// };

// function getUser() {
//   console.log(this);
// }

// getUser.call(user1)
// getUser.call(user2)


// const str = 'Alex';
// localStorage.setItem('user', str)
// const localStr = localStorage.getItem('user');
// console.log(localStr);


// const num = 25;
// localStorage.setItem('age', num)
// const localNum = +localStorage.getItem('age');
// console.log(localNum);


// const boll = true;
// localStorage.setItem('isActive', boll)
// const localBool = localStorage.getItem('isActive') === 'true';
// console.log(localBool);

// const obj = {
//   name: 'Alex 2',
//   address: {
//     city: 'Los Angeles',
//     country: 'USA',
//   }
// };

// localStorage.setItem('obj', JSON.stringify(obj))
// const localObj = JSON.parse(localStorage.getItem('obj'));
// console.log(localObj);

// const arr = [1, 2, 3, 4, 'my name'];
// localStorage.setItem('arr', JSON.stringify(arr))
// const localArr = JSON.parse(localStorage.getItem('arr'));
// console.log(localArr);

// localStorage.removeItem('user')


// const str = 'Denis'

// console.log(str);
// console.log(str.toUpperCase());
// console.log([...str].reverse().join(''));
// console.log(str[0] === str[0].toUpperCase());

// const num = 100_000_000;
// console.log(num);

// const lang = 'kk';

// const response = {
//   title_ru: "Заголовок на русском",
//   title_kk: "Заголовок на казахском",
// }

// console.log(response[`title_${lang}`]);
// console.log(response['title_' + lang]);


// const input = document.querySelector('input');

// input.addEventListener('input', (e) => {
//   console.log(+e.target.value);
// });


