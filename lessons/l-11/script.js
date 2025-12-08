
// document.addEventListener('DOMContentLoaded', () => {
//   const h1 = document.querySelector('h1');

//   console.log('worked');

//   console.log(h1);
// });


// const
//   test1 = '',
//   test2 = '',
//   test3 = [];

// test3.push('dwa')

// console.log({
//   test1,
//   test2,
//   test3
// });


// const h1 = document.querySelector('h1');


// if (h1) {
//   console.log('Тег h1 найден');
// } else {
//   console.log('Тег h1 не найден');
// }

// h1 ? console.log('Тег h1 найден')
//   : console.log('Тег h1 не найден');



// const user = {
//   firstName: 'Alex',
//   lastName: 'Smith'
// }

// try {
//   console.log(user.birthDate.day);
//   const dwadaw = dwadwadwa
// } catch (error) {
//   console.log('Произошла ошибка в поле user.birthDate.day', error);
// }


// console.log('Наш скрипт отработал до конца!');


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// arr.forEach((item) => {
//   console.log(item);
// });


// for (let index = 0; index < arr.length; index++) {
//   console.log(arr[index]);
//   if (arr[index] === 3) {
//     break
//   }
// }
// for in
// for of
// while


const filteredArr = arr.filter((item) => item < 4);

const newArray = arr.map((item) => (
  {
    name: `Name #${item}`,
    id: item,
  }
)
);

// console.table(newArray);
// console.log(newArray);


// console.log(arr);

// Мутирует исходный массив
const nArr = [];
arr.forEach(item => nArr.push(item))
// const popedArr = nArr.pop();
const popedArr = [...arr].pop();

// console.log(popedArr);
// console.log(arr);



// const testStr2 = {
//   name: 'dwadwadwa'
// };

// const testStr = {
//   name: 'dwadwadwa'
// };

// Object.freeze(testStr)

// testStr.age = 222
// console.log(testStr);

// console.log(testStr == testStr2);



const user = {
  firstName: 'Alex',
  lastName: 'Smith',
  age: 22,
  city: 'Almaty'
}

// delete user.lastName

// console.log(user);


const userKeys = Object.keys(user);

const userValues = Object.values(user);

// console.log(userValues);

// console.log(userKeys);

// userKeys.forEach(key => console.log(key, user[key]))


// console.log(window.window.window.window.window.window.window);

// console.log([1] == [1]);

// console.log('' || 'Сработал твикс (или)');

// console.log('' ?? 'Сработал ?? (или)');

const myTitle = document.querySelector('h2').textContent ?? document.querySelector('h1').textContent;

console.log(myTitle);
