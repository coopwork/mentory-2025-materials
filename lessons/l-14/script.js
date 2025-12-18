
// const user1 = {
//   name: 'Alex',
//   age: 25,
//   sayHello() {
//     console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old`);
//   }
// };


// const user2 = {
//   name: 'Alisa',
//   age: 23,
//   sayHello() {
//     console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old`);
//   }
// };


// user1.sayHello()
// user2.sayHello()

// class User {
//   #password;
//   #balance;

//   constructor(name, age, password, job = 'Mentory Edu') {
//     this.name = name;
//     this.age = age;
//     this.#password = password;
//     this.job = job;
//     this.#balance = {
//       card: '',
//       amount: 0,
//     };
//   }

//   getBalance() {
//     return this.#balance.amount;
//   }

//   addBalance(amount) {
//     this.#balance.amount += amount;
//   }

//   sayHello() {
//     console.log(this);

//     console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old`);
//   }

//   chechPassword(pass) {
//     return this.#password === pass;
//   }

//   resetPassword(oldPass, newPass) {
//     if (this.#password === oldPass) {
//       this.#password = newPass;
//     }
//   }
// }

// const user1 = new User('Alex', 25, 'alex123', 'AITU')
// const user2 = new User('Alisa', 23, 'alisa123')

// console.log({
//   user1,
//   user2
// });

// console.log('Проверяем пароль 3253453', user1.chechPassword('3253453'));
// console.log('Проверяем пароль alex123', user1.chechPassword('alex123'));
// console.log('Пытаемся поменять пароль с не корректными данными')
// user1.resetPassword('43534543', '43634634');
// console.log('Проверяем пароль alex123', user1.chechPassword('alex123'));
// console.log('Пытаемся поменять пароль с корректными данными')
// user1.resetPassword('alex123', '43634634');
// console.log('Проверяем пароль alex123', user1.chechPassword('alex123'));
// console.log('Проверяем пароль 43634634', user1.chechPassword('43634634'));


// user1.sayHello()
// user2.sayHello()


// Нюанс при работе с методами классов
// const mySayHello = user1.sayHello;
// mySayHello()


// console.log(user1.#balance);


// console.log(user1.getBalance());
// user1.addBalance(1000)
// console.log(user1.getBalance());
// user1.addBalance(5000)
// console.log(user1.getBalance());


// class Student {
//   constructor(name) {
//     this._name = name;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     if (value.length < 2) return
//     this._name = value;
//   }
// }

// const st = new Student('Alex');

// console.log(st);
// console.log(st.name);
// st.name = 'd'
// console.log(st.name);



class Animal {
  constructor(name) {
    this.name = name;
  }

  voice() {
    return `${this.name} издаёт звук`
  }
}

class Dog extends Animal {
  constructor(name, secure) {
    super(name)

    this.secure = secure
  }

  voice() {
    return `${this.name}, лает`
  }

  secureAction() {
    return `${this.name} охраняет ${this.secure}`
  }
}

const an = new Animal('Животное', 'хозяина');
const dg = new Dog('Собака', 'хозяина');

console.log(an.voice());
console.log(dg.secureAction());
