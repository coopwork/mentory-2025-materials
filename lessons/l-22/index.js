


const user1 = {
  firstname: 'alex'
};

const user2 = {
  ...user1
};

user2.firstname = '';

console.log(user1);
console.log(user2);


