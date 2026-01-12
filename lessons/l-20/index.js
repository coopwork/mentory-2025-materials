

// function rec(obj) {
//   console.log('my rec');
//   if (obj.child) {
//     rec(obj.child);
//   }
// }

// rec({ child: { child: {} } })

// Call stack
// function a() {
//   b()
// }
// function b() {
//   c()
// }
// function c() {
//   console.log('Hello im C func');
// }
// a()



// first class fn
// function run(fn) {
//   fn()
// }

// run(() => console.log('RUN is running'))

// function func(arg) {
//   const test = 'TEST STR';
//   arg(test);
// }

// func((arg) => console.log(arg))


// Closure
// function createCounter() {
//   let count = 0;

//   return function () {
//     count++
//     return count
//   }
// }

// const counter = createCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// Currying
// function sum(a) {
//   return function (b) {
//     return a + b
//   }
// };

// console.log(sum(5)(5));
// console.log(sum(5)(5));



// Область видимости
// const test = 'test'
// function getTest() {
//   const test = 'test func';
//   if (test) {
//     const test = 'test if in func'
//     console.log(test);
//   }
//   console.log(test);
// }

// getTest()
// console.log(test);


// Event loop

// console.log(1)

// setTimeout(() => console.log(2))

// Promise.resolve().then(() => console.log(3))

// console.log(4)

