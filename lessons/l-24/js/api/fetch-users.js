export async function fetchUsers() {
  // console.log(new Date().toLocaleTimeString());
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

  console.table(users);

  // console.log(new Date().toLocaleTimeString());
};