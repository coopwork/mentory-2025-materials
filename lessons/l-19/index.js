


// pending (загрузка)
// resolve / fullfilled (успех)
// reject / rejected (ошибка)

async function getUsers() {

  const body = JSON.stringify({
    name: "ALEX"
  })
  const users = await fetch('https://jsonplaceholder.typicode.com/users/1', {
    body: body,
    headers: {
      "x-auth": 'dwadawdawdawaw awdawdaw'
    },
    method: 'PATCH'
  })
    .then(response => response.json());

  if (!users.length) {
    throw new Error('Не получилось получить пользователей')
  }

  return users
}

// getUsers()


// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('Всё плохо!')
//   }, 1250);
// });

// promise
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.warn(err);
//   })
//   .finally(() => {
//     console.log("Запрос завершился");
//   })

async function getResFromPromise() {
  try {
    const res = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Всё хорошо!')
      }, 1000);
    });

    return res

  } catch (error) {
    console.error(error);
    throw new Error(error)
  }
}

// Пример нескольких обращений одновременно
// async function test() {
//   const users = await getUsers();
//   const news = await getNews();
// }

// async function getAllMyPromises() {
//   Promise.all([
//     getResFromPromise(),
//     getUsers()
//   ])
//     .then(res => console.log(res)
//     )
//     .catch(err => console.error(err)
//     )
// }
// getAllMyPromises()



async function getRaceMyPromises() {
  Promise.race([
    getResFromPromise(),
    getUsers()
  ])
    .then(res => console.log(res)
    )
    .catch(err => console.error(err)
    )
}

getRaceMyPromises();

// Promise.allSettled
// status: fullfilled (Всё хорошо) значит будет объект с value
// status: rejected (ошибка) значит будет объект с reason

// Promise.any
// Отработает если есть хотя бы один fullfiled промис





const PATCH_M = {
  "name": "ALEX TEST",
  "username": "BreTest",
}

const PUT_M = {
  "id": 1,
  "name": "Alex Test",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}