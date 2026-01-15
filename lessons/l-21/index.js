
// const shoppingCart = JSON.parse(localStorage.getItem('shopping_cart'));

// console.table(shoppingCart);


// function func1({ arg1, arg2, arg3, arg4, arg5 }) {
//   console.log({
//     arg1,
//     arg2,
//     arg3,
//     arg4,
//     arg5,
//   });

// }

// function func2(args) {
//   console.log({
//     arg1: args.arg1,
//     arg2: args.arg2,
//     arg3: args.arg3,
//     arg4: args.arg4,
//     arg5: args.arg5,
//   });
// }


// func1({
//   arg1: 'arg1'
// })

// func2({
//   arg1: 'arg1'
// })


// debugger
function getUser() {
  return {
    firstname: 'Alex',
    lastname: 'Smith',
    age: 25,
  }
}


const { firstname } = getUser();

// console.log(firstname);


const int1 = 2353426534;
const int2 = 365346436;

// console.log(test);


const sum = int1 + int2;

// console.log(sum);


const test__input = document.querySelector('.test__input');
const test__block = document.querySelector('.test__block');


test__input.addEventListener('input', (e) => {

  const { value } = e.target;
  // console.log(value);

  test__block.innerHTML = value;
  // test__block.textContent = value;

});


console.log(eval('(2 + 2) * 5 - 5 + 10'));
