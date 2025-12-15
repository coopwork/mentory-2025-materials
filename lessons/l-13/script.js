

const btn = document.querySelector('.btn');
const btn2 = document.querySelector('.btn2');
const countTitle = document.querySelector('.counter');


// let clicks = 0;

// function clickFunc(e) {
//   console.log('Клик по кнопке');

//   if (clicks > 5) {
//     btn.removeEventListener('click', clickFunc);
//   } else {
//     clicks++
//     console.log('Был клик по кнопке', clicks);
//   }
// }

// btn.addEventListener('click', clickFunc);

// btn.addEventListener('click', () => {
//   console.log('Клик');
// });

// btn.addEventListener('click', () => {
//   console.log('Первый вызов');
// });

// btn.addEventListener('click', () => {
//   console.log('Второй вызов');
// });

// btn.onclick = () => {
//   console.log('Первый вызов');
// };

// btn.onclick = null;

// addEventListener с безымянной функцией можно удалить черезе signal


// function getText() {
//   console.log('Была вызвана функция getText');

//   const myTimeout = setTimeout(() => {

//     console.log('Отработал таймаут в функции getText');

//     clearTimeout(myTimeout)

//   }, 2000);

// }

// btn.addEventListener('click', getText);

// let count = 9;

// function getCount() {
//   console.log('Вызвана функция getCount');

//   const myInterval = setInterval(() => {

//     if (count <= 3) {
//       countTitle.style.color = 'red'
//     }

//     if (count < 0) {
//       // window.location.href = 'https://google.com'
//       // window.location.pathname = '/404.html'
//       clearInterval(myInterval)
//     } else {
//       countTitle.textContent = count--
//     }
//   }, 1000);

// }


// btn.addEventListener('click', getCount);
// btn2.addEventListener('click', getCount);

// window.location.href = 'https://google.com'




const now = new Date().toISOString();

// console.log(now);
// countTitle.textContent = new Date(now).toLocaleString();
countTitle.textContent = now;


